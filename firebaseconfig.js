import {initializeApp} from 'firebase/app'

import {getFirestore} from 'firebase/firestore'

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCktAvObEY9LB4jwVpvq2pvo_zYLEkpFsY",
    authDomain: "worldline-c9c0a.firebaseapp.com",
    projectId: "worldline-c9c0a",
    storageBucket: "worldline-c9c0a.appspot.com",
    messagingSenderId: "58660443802",
    appId: "1:58660443802:web:1c829a58afc4962a37f123",
    measurementId: "G-J0KR6SBN48"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

export const auth = getAuth()