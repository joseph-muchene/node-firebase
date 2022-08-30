//===========
// task
//=== add data to firebase collection and update it after 5 seconds using timeOut function

//==========

import { db } from "./config.js";
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan",
});
console.log("Document written with ID: ", docRef.id);

const Ref = doc(db, "cities", docRef.id);
setTimeout(async () => {
  // Set the "capital" field of the city 'DC'
  await updateDoc(
    Ref,
    {
      updated: "true",
    },
    { merge: true }
  ).then(() => {
    console.log("updated");
  });
}, 5000);
