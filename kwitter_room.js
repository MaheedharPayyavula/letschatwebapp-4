// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAiSx-1uL-joN1coojmsidXiwbJUe7tmn0",
      authDomain: "lets-chat-web-app-21f86.firebaseapp.com",
      projectId: "lets-chat-web-app-21f86",
      storageBucket: "lets-chat-web-app-21f86.appspot.com",
      messagingSenderId: "1029444291556",
      appId: "1:1029444291556:web:d96cf42418fee5607015f1"
    };
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").Value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "kwitter.html";
}