
const firebaseConfig = {
      apiKey: "AIzaSyD59aUK4iUXYrDwQSf2FAxLNEfo2QS3a8A",
      authDomain: "kwitter-68e0b.firebaseapp.com",
      databaseURL: "https://kwitter-68e0b-default-rtdb.firebaseio.com",
      projectId: "kwitter-68e0b",
      storageBucket: "kwitter-68e0b.appspot.com",
      messagingSenderId: "603488602060",
      appId: "1:603488602060:web:6f61731536e27799d3ff69"
    };
    firebase.initializeApp(firebaseConfig);    
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addroom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose:"adduser"
  
        });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"   
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; });
      //End code
}); }; 
getData();
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_room.html"; }
function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }