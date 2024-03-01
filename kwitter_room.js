const firebaseConfig = {
    apiKey: "AIzaSyClJzC_2oMyRHXwtoMugzQAq8nVA-0kHAo",
    authDomain: "vamosconversar-27177.firebaseapp.com",
    databaseURL: "https://vamosconversar-27177-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-27177",
    storageBucket: "vamosconversar-27177.appspot.com",
    messagingSenderId: "714751383939",
    appId: "1:714751383939:web:24d5024efaa08f81ebfeb6"
  };
  firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Bem vindo(a), "+user_name+"!";
    
    function addRoom(){
        room_name=document.getElementById("room_name").value
        firebase.database().ref("/").child(room_name).update
        ({ purpose: "adicionando nome da sala", });

        localStorage.setItem("room_name",room_name)
        window.location="conversa.html"
    }
    function getData(){
        firebase.database().ref("/").on("value",function (snapshot){
            document.getElementById("output").innerHTML="";
            snapshot.forEach(function(childSnapshot){
                childKey=childSnapshot.key;
                Room_names=childKey;
                console.log("nome da sala"+Room_names);
                row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                document.getElementById("output").innerHTML+=row;
            })
        })
    }
    getData();

    function redirectToRoomName(name){
        localStorage.setItem("room_name",name)
        window.location="conversa.html"
    }
    function sair(){
        localStorage.removeItem("user_name")
        localStorage.removeItem("room_name")
        window.location="index.html"
    }