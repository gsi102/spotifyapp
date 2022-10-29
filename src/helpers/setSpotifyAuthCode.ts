import { db } from "../services/firebaseRequestsConfig";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

export async function setSpotifyAuthCode(code: string) {
  const usersRef = doc(db, "users", code);
  const now = new Date();
  localStorage.setItem("last_timestamp", JSON.stringify(+now));
  const response = await setDoc(usersRef, {
    timestamp: Timestamp.fromDate(now),
  }).catch((e) => console.error(e));

  return response;
}
