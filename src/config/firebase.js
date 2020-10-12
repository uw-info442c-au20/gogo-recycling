import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCdZeChzEgtbzBnHYlM1sQlLFVreeXNRRo",
    authDomain: "gogo-recycling.firebaseapp.com",
    databaseURL: "https://gogo-recycling.firebaseio.com",
    projectId: "gogo-recycling",
    storageBucket: "gogo-recycling.appspot.com",
    messagingSenderId: "105795810230",
    appId: "1:105795810230:web:b6ed2bfb84b47dbe69c717",
    measurementId: "G-LJ3KFW4KXJ"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const fireauth = firebase.auth();
const storage = firebase.storage();

export { firebase, firestore, fireauth, storage };