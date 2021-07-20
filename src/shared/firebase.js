import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBxhs_De-f5op-3-dW1TJH5Fmjfy8VSwnY',
  authDomain: 'facebook-clone-63b00.firebaseapp.com',
  projectId: 'facebook-clone-63b00',
  storageBucket: 'facebook-clone-63b00.appspot.com',
  messagingSenderId: '724742266751',
  appId: '1:724742266751:web:793e29781bfcc5bfb8444a',
  measurementId: 'G-LMLCX356P4',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };
