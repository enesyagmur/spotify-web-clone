import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDniLhJx9TpwkjC4C3KHnw3JBVwgmAzkAg",
  authDomain: "spotify-web-clone-96720.firebaseapp.com",
  projectId: "spotify-web-clone-96720",
  storageBucket: "spotify-web-clone-96720.appspot.com",
  messagingSenderId: "989537071139",
  appId: "1:989537071139:web:ead0a3fd2b83f0a9850196",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
