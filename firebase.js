import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAB-JB5xgTcQNtHm1H_ckVvGenf_IM9wjg',
  authDomain: 'movie-app-17686.firebaseapp.com',
  projectId: 'movie-app-17686',
  storageBucket: 'movie-app-17686.appspot.com',
  messagingSenderId: '29176569496',
  appId: '1:29176569496:web:f9fa6285ca853564d0baed',
};

const app = !firebase.apps.length
  ? firebase.initializApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
