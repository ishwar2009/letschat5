var firebaseConfig = {
  apiKey: "AIzaSyCcP8h3T0H2y_Xl8sgLlmLMYy9EpbDvRZU",
  authDomain: "lets-chat-ee127.firebaseapp.com",
  databaseURL: "https://lets-chat-ee127-default-rtdb.firebaseio.com",
  projectId: "lets-chat-ee127",
  storageBucket: "lets-chat-ee127.appspot.com",
  messagingSenderId: "478943446727",
  appId: "1:478943446727:web:3b37c9d7ddae3e796ee0e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");

document.getElementById("name").innerHTML = "welcome " + username + "!";
function newroom(){
      room=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
            purpose:"Adding Room name"
      });
      localStorage.setItem("roomname",room);
      window.location = "kwitter_page.html";
}
function getdata() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name "+Room_names);
      
      row ="<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#"+ Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML+= row;
      
      });});}
getdata();
function redirecttoroomname(name){
      console.log(name)
      localStorage.setItem("roomname",name)
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
