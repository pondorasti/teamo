import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./config"

// make sure it is not already initialized first
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()

export default auth
