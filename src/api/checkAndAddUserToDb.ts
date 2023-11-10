import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

export const checkAndAddUserToDB = async () => {
    // Add a new document in collection "cities"
await setDoc(doc(db, "Users", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  })
}