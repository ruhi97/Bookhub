import*as firebase from'firebase';
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyC5YerzQq2xO8_FYS7LX1CJ6U8EmddxdrY",
  authDomain: "wily-app-7917f.firebaseapp.com",
  databaseURL: "https://wily-app-7917f.firebaseio.com",
  projectId: "wily-app-7917f",
  storageBucket: "wily-app-7917f.appspot.com",
  messagingSenderId: "181135961728",
  appId: "1:181135961728:web:e45b1082c70f46eded8065"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();