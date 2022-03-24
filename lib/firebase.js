import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCjnphMs4luyd1IYMUI56xu1TuXzQP0wE8",
	authDomain: "nextfire-13d14.firebaseapp.com",
	projectId: "nextfire-13d14",
	storageBucket: "nextfire-13d14.appspot.com",
	messagingSenderId: "763549006302",
	appId: "1:763549006302:web:4297e73997801afffc454f",
	measurementId: "G-7EBCGXRZVD",
};
// Initialize firebase
// let firebaseApp;
// let firestore;
// if (!getApps().length) {
//   // firebase.initializeApp(firebaseConfig);
//   initializeApp(firebaseConfig);
//   firestore = getFirestore();
// }

function createFirebaseApp(config) {
	try {
		return getApp();
	} catch {
		return initializeApp(config);
	}
}

// const firebaseApp = initializeApp(firebaseConfig);
const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth exports
// export const auth = firebase.auth();
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();


// Firestore exports
export const firestore = getFirestore(firebaseApp);
// export const firestore = firebase.firestore();
// export { firestore };
// export const serverTimestamp = serverTimestamp;
// export const fromMillis = fromMillis;
// export const increment = increment;

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';
