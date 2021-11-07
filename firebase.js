import { getFirestore } from '@firebase/firestore';
import { initializeApp, getApp, getApps } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyAB-JB5xgTcQNtHm1H_ckVvGenf_IM9wjg',
  authDomain: 'movie-app-17686.firebaseapp.com',
  projectId: 'movie-app-17686',
  storageBucket: 'movie-app-17686.appspot.com',
  messagingSenderId: '29176569496',
  appId: '1:29176569496:web:f9fa6285ca853564d0baed',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

export default db;
