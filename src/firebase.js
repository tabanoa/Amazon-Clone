import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCdJ03mZAvjZzWWcQZGeI4WR3ikzmC49AI",
  authDomain: "clone-ea36f.firebaseapp.com",
  projectId: "clone-ea36f",
  storageBucket: "clone-ea36f.appspot.com",
  messagingSenderId: "518223330899",
  appId: "1:518223330899:web:d049aea6412997e958d0a6",
  measurementId: "G-9MJXRB1QK3"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth};
