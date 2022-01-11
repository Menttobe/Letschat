
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
  function adduser(){
      var user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adduser"

      });

  }