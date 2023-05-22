import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT7BWgWA4BggQ1z_wfIs_qtUJ7ztWdias",
  authDomain: "chatterblog-2061d.firebaseapp.com",
  projectId: "chatterblog-2061d",
  storageBucket: "chatterblog-2061d.appspot.com",
  messagingSenderId: "317185712350",
  appId: "1:317185712350:web:ee2faa3d77c799fca2e24f",
};

const chatterblogApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.fieldValue.serverTimestamp;

export { timestamp };
export default chatterblogApp.firestore();
