import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKEs1cmXxpEDx5GSDHN4X7PA3I8PDKrj0",
  authDomain: "spotifyapp-97395.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://spotifyapp-97395-default-rtdb.firebaseio.com/",
  projectId: "spotifyapp-97395",
  storageBucket: "spotifyapp-97395.appspot.com",
  messagingSenderId: "791471675440",
  appId: "1:791471675440:web:a4decc6bec52ef34e4f5f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
