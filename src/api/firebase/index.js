import firestore from "./firestore"

export { default as auth } from "./auth"
export { default as firestore } from "./firestore"
export { default as storage } from "./storage"

export const usersRef = firestore.collection("users")
export const takenUsernamesRef = firestore.collection("takenUsernames")
