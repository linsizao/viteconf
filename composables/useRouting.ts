import { createBlankTicket } from '@@/helpers/utils';

function navigateToTicketRoute(screenName) {
	navigateTo('/tickets/' + screenName.toLowerCase());
	window.scrollTo(0, 0);
}

export async function navigateToTicket(screenName) {
	const ticket = useTicket();
	if (!import.meta.env.VITE_FIREBASE_API_KEY) {
		ticket.value = createBlankTicket();
		navigateToTicketRoute(screenName)
		return;
	}
	const loadedTicket = await getTicketInfo(screenName);
	if (loadedTicket) {
		ticket.value = loadedTicket;
		navigateToTicketRoute(screenName)
	} else {
		console.log('Ticket not found for user: ' + screenName);
		ticket.value = createBlankTicket();
		navigateTo('/');
	}
}

export function goToUserTicket() {
	if (!import.meta.env.VITE_FIREBASE_API_KEY) {
		console.log('No Firebase API key found. Skipping ticket save.');
		navigateToTicket('test-user');
		return
	}

	const user = useFirebaseUser();
	if (user.value) {
		const screenName = getUserScreenName(user.value);
		if (screenName) {
			console.log(screenName);
			navigateToTicket(screenName);
		}
	}
}

export function useShowAfterUserInit(minDelay: number = 500) {
	const firebaseUserInit = useFirebaseUserInit();
	const show = ref(false);
	const start = Date.now();
	watchEffect(() => {
		if (firebaseUserInit.value) {
			const waitFor = minDelay - (Date.now() - start);
			if (waitFor > 0) {
				setTimeout(() => (show.value = true), waitFor);
			} else {
				show.value = true;
			}
		}
	});
	return show;
}
