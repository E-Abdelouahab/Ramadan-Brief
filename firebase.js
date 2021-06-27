
import firebase from '@firebase/app';
import 'firebase/firestore';

const  config = {
  apiKey: "AIzaSyCS6omObvfyeK4pNFc5VpxLTGjAsFa3meo",
  authDomain: "simulation-cedit.firebaseapp.com",
  projectId: "simulation-cedit",
  storageBucket: "simulation-cedit.appspot.com",
  messagingSenderId: "250451153567",
  appId: "1:250451153567:web:00e626361b72f37c14c8aa"
  };
  // Initialize Firebase
  firebase.initializeApp(config);



  export default firebase