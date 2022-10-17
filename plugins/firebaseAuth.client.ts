import { initializeApp } from 'firebase/app';

export default defineNuxtPlugin(() => {
	const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY
	if (!firebaseApiKey) {
		console.log('No firebase api key found, running app with a test user and ticket');
		const firebaseUserInit = useFirebaseUserInit();
		firebaseUserInit.value = true
		const user = useUser();
		setTimeout(() => {
			user.value = { uid: 'uid' };
		},10);
		return;
	}
	const firebaseConfig = {
		apiKey: firebaseApiKey,
		authDomain: 'viteconf.firebaseapp.com',
		databaseURL: 'https://viteconf-default-rtdb.firebaseio.com',
		projectId: 'viteconf',
		storageBucket: 'viteconf.appspot.com',
		messagingSenderId: '1094561817580',
		appId: '1:1094561817580:web:6c70df0629562c01c756c9',
	};
	const firebaseApp = initializeApp(firebaseConfig);

	initUser();
});
