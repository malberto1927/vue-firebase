import firebase from 'firebase'
import config from './config'

firebase.initializeApp(config.firebase)

const auth = firebase.auth()

export default {
  auth
}
