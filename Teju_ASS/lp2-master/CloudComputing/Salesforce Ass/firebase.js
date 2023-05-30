const firebaseConfig = {
  apiKey: "AIzaSyC3jRXzwBla7IL8UHz02kTdhx-yvHttLlg",
  authDomain: "ass8-c15db.firebaseapp.com",
  projectId: "ass8-c15db",
  storageBucket: "ass8-c15db.appspot.com",
  messagingSenderId: "346473093957",
  appId: "1:346473093957:web:d58387871c29da2d6d7c2c",
  measurementId: "G-1YJY8QHKQR"
};

var app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

function emailLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("User loggedin successfully!!");
        window.location.href = "/login.html";
        console.log('Logged in:', userCredential.user);
      })
      .catch((error) => {
        alert("User doesn't exists!!");
        console.error('Login error:', error.message);
      });
}

function googleLogin() {
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuth)
      .then((userCredential) => {
        alert("User loggedin successfully!!");
        window.location.href = "/login.html"
        console.log('Logged in:', userCredential.user);
      })
      .catch((error) => {
        alert("User doesn't exists!!");
        console.error('Login error:', error.message);
      });
}
  

function signup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("User registered successfully!!");
        console.log('Signed up:', userCredential.user);
    })
    .catch((error) => {
        console.error('Signup error:', error.message);
    });
}

function logout() {
    firebase.auth().signOut()
        .then(() => {
            alert("Logged out successfully!!");
            console.log('Logged out');
        })
        .catch((error) => {
            console.error('Logout error:', error.message);
        });
}

function addNote() {
    const note = document.getElementById("noteInput").value;
    var noteCollection = db.collection('Saved Notes');
    document.getElementById("notesButton").addEventListener('click' , e => {
        e.preventDefault();
        noteCollection.doc("Notes").set({
            Note: note,
            Date_added: Date.now()
        })
        .then(()=> {alert('Note successfully added!!');})
        .catch(error => {console.error(error.message)});
        });
}