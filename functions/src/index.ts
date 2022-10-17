import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

const db = admin.database();

const checkContextAuth = (auth: any) => {
	if (!auth) {
		throw new functions.https.HttpsError(
			'failed-precondition',
			'Must be authenticated.'
		);
	}
};

export const setUserAlias = functions.https.onCall((data, context) => {
	checkContextAuth(context.auth);
	const userRef = db.ref(`users/${data.user.uid}`);
	const ghUsername = data.user.screenName.toLowerCase();
	console.log('ghUsername: ', ghUsername);
	return userRef.set({ ghUsername }).catch((error) => error);
});

export const setUserTicket = functions.https.onCall((data, context) => {
	checkContextAuth(context.auth);
	const ticketRef = db.ref(`tickets/${data.ticket.screenName.toLowerCase()}`);
	const ticket = data.ticket;
	console.log('ticket: ', ticket);
	return ticketRef.set(ticket).catch((error) => error);
});

// export const deleteUserTicket = functions.https.onCall(async (data, context) => {
//   checkContextAuth(context.auth);
//   console.log('data.ticket: ', data.ticket);
//   const ticketRef = db.ref(`tickets/${data.ticket.screenName.toLowerCase()}`);
//   const userRef = db.ref(`users/${data.ticket.uid}`);
//   await ticketRef.remove()
//     .catch(error => error);
//   await userRef.remove()
//     .catch(error => error);
// });
