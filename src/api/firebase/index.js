import auth from "./auth"
import firestore from "./firestore"
import storage from "./storage"

export { auth, firestore, storage }

export const usersRef = firestore.collection("users")
export const lobbiesRef = firestore.collection("lobbies")
export const takenUsernamesRef = firestore.collection("takenUsernames")

export const profilePicturesStorageRef = storage.child("profilePictures")
