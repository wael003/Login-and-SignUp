function login(){
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    
    getPasswordByEmail(email)
    .then(pass =>{
       
        if(pass.Password == password){
            document.getElementById("loginError").innerHTML = "correct!";
        }
        else{
            document.getElementById("loginError").innerHTML = "Wrong Email or Password , please try again !";
        }
    }).catch(err =>{
        document.getElementById("loginError").innerHTML = "Wrong Email or Password , please try again !";
    })
}