import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlMmmR8Zfigi3j8EpOKZtImC-gfR8b_wY",
  authDomain: "facebookclone-7dc21.firebaseapp.com",
  projectId: "facebookclone-7dc21",
  storageBucket: "facebookclone-7dc21.appspot.com",
  messagingSenderId: "538569329826",
  appId: "1:538569329826:web:9b50d61599d46836a79bfb",
  measurementId: "G-Z7RW79WLVC",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };
