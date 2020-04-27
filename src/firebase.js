import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBJo8KPUVv7WziBhh32Xl89nM0slUEMZtg",
    authDomain: "mmala-c4994.firebaseapp.com",
    databaseURL: "https://mmala-c4994.firebaseio.com",
    projectId: "mmala-c4994",
    storageBucket: "mmala-c4994.appspot.com",
    messagingSenderId: "973785344258",
    appId: "1:973785344258:web:0825a85c7930a8ed9afa1b"
  };

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore