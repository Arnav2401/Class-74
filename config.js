import * as firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB3jRLQOm2aghA0LgL6ocqRqElLOOI2Ppc',
  authDomain: 'willy-app-3c04a.firebaseapp.com',
  projectId: 'willy-app-3c04a',
  storageBucket: 'willy-app-3c04a.appspot.com',
  messagingSenderId: '597445851699',
  appId: '1:597445851699:web:44496586173ae16438c146',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
