function login() {

    username=document.getElementById("nameinput").value;
    password=document.getElementById("password").value;
    
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    window.location="Kwitter_room.html";

}
    

