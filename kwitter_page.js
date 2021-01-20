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

  username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username,
        message: msg,
        like: 0


    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + roomname).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Like: "+like+ "</button><hr>";
                row = name_with_tag + message_with_tag + like_button;
                document.getElementById("output").innerHTML += row;
                //End code 

            }
        });
    });
}
getData();

function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(roomname).child(message_id).update({
        like: updated_likes
    });
}

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("roomname");
    window.location = "index.html";
}