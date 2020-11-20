import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlel2nyHkxpjnBSIkCNgJ3ZYS5a8f6ODw",
    authDomain: "instagram-clone-b4ecf.firebaseapp.com",
    databaseURL: "https://instagram-clone-b4ecf.firebaseio.com",
    projectId: "instagram-clone-b4ecf",
    storageBucket: "instagram-clone-b4ecf.appspot.com",
    messagingSenderId: "381588187768",
    appId: "1:381588187768:web:8a8b4402985fc2f1889b8d"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
