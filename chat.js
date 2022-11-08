// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


var firebaseConfig = {
    apiKey: "AIzaSyAi6nPs_HeDv2IrjLeboMi4ucWljxMmz8g",
    authDomain: "kwitter-cfc19.firebaseapp.com",
    databaseURL: "https://kwitter-cfc19-default-rtdb.firebaseio.com",
    projectId: "kwitter-cfc19",
    storageBucket: "kwitter-cfc19.appspot.com",
    messagingSenderId: "341258083449",
    appId: "1:341258083449:web:2a3b9cf4c2c7cf778048a8",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



