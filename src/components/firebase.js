import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD9hxxQ2gnI3xkhHgyyJaK_Z99KsFgIrI8",
    authDomain: "react-diary-686ac.firebaseapp.com",
    databaseURL: "https://react-diary-686ac.firebaseio.com",
    projectId: "react-diary-686ac",
    storageBucket: "react-diary-686ac.appspot.com",
    messagingSenderId: "143590748928"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

export const notes = db.collection('notes');
