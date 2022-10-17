import { useDebounceFn } from '@vueuse/core';
import { Framework } from '~~/helpers/constants';
import { useFirebaseUser, useUser, useFirebaseUserInit } from './useStates';
import type { User as FirebaseUser } from 'firebase/auth';
import { createBlankTicket } from '~~/helpers/utils';

export type TicketInfo = {
	displayName: string;
	favoriteFrameworks: Framework;
	isSpeaker: boolean;
	photo: string;
	screenName: string;
	ticketNumber: number;
	uid: string;
};

export function getUserScreenName(user) {
	return user?.reloadUserInfo?.providerUserInfo[0]?.screenName;
}

let firebaseApp: typeof import('firebase/app');
let firebaseAuth: typeof import('firebase/auth');
let firebaseAuthInstance: import('firebase/auth').Auth;

export async function initUser() {
	firebaseApp = await import('firebase/app');
	firebaseAuth = await import('firebase/auth');
	const {
		indexedDBLocalPersistence,
		browserLocalPersistence,
		browserSessionPersistence,
	} = firebaseAuth;

	const auth = firebaseAuth.initializeAuth(firebaseApp.getApp(), {
		persistence: [
			indexedDBLocalPersistence,
			browserLocalPersistence,
			browserSessionPersistence,
		],
	});

	firebaseAuthInstance = auth;

	const firebaseUser = useFirebaseUser();
	const user = useUser();
	const firebaseUserInit = useFirebaseUserInit();

	const setCurrentUser = (fUser: FirebaseUser) => {
		firebaseUser.value = fUser;
		user.value = fUser ? { uid: fUser.uid } : null;
	}

	setCurrentUser(auth.currentUser);
	firebaseAuth.onAuthStateChanged(auth, async (fUser) => {
		setCurrentUser( fUser ?? null );
	});
	firebaseUserInit.value = true;
}

export async function signOutUser() {
	const auth = firebaseAuth.getAuth();
	const result = await auth.signOut();
	return result;
}

function avatarWithSize(url, size) {
	return `${url}${url.includes('?') ? '&' : '?'}size=${size}`;
}

export async function signInUser(): Promise<void> {
	const { getFunctions, httpsCallable } = await import('firebase/functions');
	const { getDatabase, ref, get, runTransaction } = await import(
		'firebase/database'
	);

	const functions = getFunctions();
	const setUserAlias = httpsCallable(functions, 'setUserAlias');

	const creatingTicket = useCreatingTicket();
	creatingTicket.value = true;
	try {
		const db = getDatabase();
		const provider = new firebaseAuth.GithubAuthProvider();

		const result = await firebaseAuth.signInWithPopup(
			firebaseAuthInstance,
			provider,
			firebaseAuth.browserPopupRedirectResolver
		);

		const credential =
			firebaseAuth.GithubAuthProvider.credentialFromResult(result);
		const ghResponse = await fetch('https://api.github.com/user', {
			headers: {
				Authorization: `token ${credential.accessToken}`,
			},
		});
		const ghUser = await ghResponse.json();

		console.log(ghUser);

		const userRef = ref(db, 'users/' + result.user.uid);

		// base user object from GitHub
		const user = {
			displayName: ghUser.name,
			screenName: ghUser.login,
			uid: result.user.uid,
			photo: avatarWithSize(ghUser.avatar_url, 200),
		};

		const userSnapshot = await get(userRef);
		if (!userSnapshot.exists()) {
			// This user doesn't exist, so we proceed with registration.
			// First set alias in user table.
			await setUserAlias({ user }).catch((error) =>
				console.log('error: ', error)
			);
		}

		const ticketRef = ref(db, 'tickets/' + user.screenName.toLowerCase());
		const ticketSnapshot = await get(ticketRef);
		if (!ticketSnapshot.exists()) {
			// Then, generate a ticket number.
			const totalTicketsRef = ref(db, 'totalTickets');
			const ticketNumber = await runTransaction(
				totalTicketsRef,
				(totalTickets) => {
					totalTickets++;
					return totalTickets;
				}
			);

			const newTicket: TicketInfo = {
				...user,
				ticketNumber:
					user.screenName === 'yyx990803' ? 1 : ticketNumber.snapshot.val(),
				favoriteFrameworks: 'Vite',
				isSpeaker: false,
			};
			creatingTicket.value = false;

			await setTicket(newTicket);
		}
	} finally {
		creatingTicket.value = false;
	}
}

export async function setTicket(ticket: TicketInfo) {
	if (ticket.screenName === 'test-user') {
		// Ignore test user
		return
	}
	const { getFunctions, httpsCallable } = await import('firebase/functions');
	const functions = getFunctions();
	const setUserTicket = httpsCallable(functions, 'setUserTicket');
	updateSocialImage(ticket.screenName, ticket.favoriteFrameworks.split(',')[0]);
	await setUserTicket({ ticket }).catch((error) =>
		console.log('error: ', error)
	);
}

export async function getTicketInfo(screenName: string) {
	if (screenName === 'test-user') {
		return createBlankTicket({ 
			screenName: 'test-user',
			photo: '/images/test-user.png',
			ticketNumber: 123456 
		});
	}
	const ticketData = await fetch(
		`https://viteconf-default-rtdb.firebaseio.com/tickets/${screenName.toLocaleLowerCase()}.json`
	);
	const ticket = await ticketData.json();
	return ticket as TicketInfo;
}

export const viteconfSocialImageUrl = `https://viteconf.org/images/viteconf-ticket.png`;

export function getTicketSocialImageUrl(screenName: string, project: string) {
	return `https://social-img.staticblitz.com/viteconf2022-tickets/${screenName.toLowerCase()}/${project.toLowerCase()}`;
}

const fetchedCache = new Map<string, Promise<any> | true>();
export function ensureSocialImage(
	screenName: string,
	project: string
): Promise<any> | true {
	const url = getTicketSocialImageUrl(screenName, project);
	let promise = fetchedCache.get(url);
	if (!promise) {
		const promise = fetch(url);
		fetchedCache.set(url, promise);
		promise
			.then(() => fetchedCache.set(url, true))
			.catch(() => fetchedCache.delete(url));
	}
	return promise;
}

export const updateSocialImage = useDebounceFn(ensureSocialImage, 1000);

export function useTicketSocialImage() {
	const ticket = useTicket();
	return computed(() =>
		getTicketSocialImageUrl(
			ticket.value.screenName,
			ticket.value.favoriteFrameworks.split(',')[0]
		)
	);
}
