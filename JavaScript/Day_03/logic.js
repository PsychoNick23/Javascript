function login(){
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    user_u = "admin";
    user_p = "admin";

    if(user == user_u && pass == user_p){
        window.open("welcome.html");

    }else{

        alert("Invalid Credemtials");

    }
}