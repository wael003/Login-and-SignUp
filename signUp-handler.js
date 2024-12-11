

function signup(){
    var username = document.getElementById("signup-userName").value;
    var password = document.getElementById("signup-password").value;
    var email = document.getElementById("signup-email").value;

    var userScheme = {UserName : username , Email : email , Password : password};
    
    addUser(userScheme)
    .then((res) =>{
           if(res.ok){
            document.getElementById("signup-userName").value = "";
            document.getElementById("signup-password").value = "";
            document.getElementById("signup-email").value = "";
           }else{
            document.getElementById("signupError").innerHTML = "this email is already exist";
           }
            
    }).catch(err=>{
        document.getElementById("signupError").innerHTML = "this email is already exist";
    })
           
              
        }
   

