
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// initialize Firebase
const config = {
  apiKey: "AIzaSyB_-XUv10BmBwuAOIPEJdPgbxEp9cvrw10",
  authDomain: "resteasy-redux.firebaseapp.com",
  databaseURL: "https://resteasy-redux.firebaseio.com",
  projectId: "resteasy-redux",
  storageBucket: "resteasy-redux.appspot.com",
  messagingSenderId: "394459746566",
  appId: "1:394459746566:web:964db52ca7965a30"
};

firebase.initializeApp(config);
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;