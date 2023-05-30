window.onload = loadUsers
var firebaseConfig = {
   apiKey: "AIzaSyC94-Bp-gGa0fq_6mQTe72q_eSseET1JRs",
  authDomain: "fir-v-ae5e2.firebaseapp.com",
  databaseURL: "https://fir-v-ae5e2-default-rtdb.firebaseio.com",
  projectId: "fir-v-ae5e2",
  storageBucket: "fir-v-ae5e2.appspot.com",
  messagingSenderId: "1010908387877",
  appId: "1:1010908387877:web:b11c94c809affae34b7dcc"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
let userData = [];

async function loadUsers (){

await firebase.database().ref('users').once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      const email = childData.email;
      const name = childData.full_name;
      const phoneno = childData.phoneno;
      const data = {
        name:name,email:email,phoneno:phoneno
      }
      userData.push(data)
    });
  });
  let html ="<tr><th>First Name</th><th>Last Name</th><th>Points</th></tr>"
  userData.forEach((user, index) => {
    var count = index+1;
    html+="<tr><td>"+count+"</td><td>"+user.name+"</td><td>"+user.email+"</td><td>"+user.phoneno+"</td></tr>";
  });
  console.log(html);
  let element = document.querySelector('.user_table');
  element.innerHTML = html
}

function logOut(){
  window.location.href = 'index.html'
}