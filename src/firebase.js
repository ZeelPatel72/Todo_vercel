import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDHXrHdq6-0MC6V_-oMaPhSuOBoQ1yKL-w',
	authDomain: 'todo-app-19018.firebaseapp.com',
	projectId: 'todo-app-19018',
	storageBucket: 'todo-app-19018.appspot.com',
	messagingSenderId: '628365964004',
	appId: '1:628365964004:web:ad9577937c5e5ca215f2f1',
	measurementId: 'G-X428FX85SP',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
