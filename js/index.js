//all inputs
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail=document.getElementById('signinEmail')
var signinPassword=document.getElementById('signinPassword')
var buttonAria=document.querySelector('.navbar-toggler')
var elemnt=document.querySelector('.navbar-collapse')
var signUpArray = []



if(localStorage.getItem("signUpArray")!==null)
    {
        signUpArray=JSON.parse(localStorage.getItem("signUpArray"));
    }
    else{
        signUpArray = []
    }
    
// to say welcome in home page
    if(localStorage.getItem("userName")){
        document.getElementById('welcomeMessag').innerHTML= "welcom "  + localStorage.getItem("userName")
    }
//for signup
   
function addsignUp() {
   if( isEmpty() == false){
        document.getElementById('exist').innerHTML=' <span class="text-danger m-3">All inputs is required</span>'  
        return false;               
        }else{
          var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    };
        }
    
    if (signUpArray.length == 0) {
        signUpArray.push(signUp);
        localStorage.setItem("signUpArray",JSON.stringify(signUpArray));
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
 
    if(checkEmail() == true){
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
               }
               else{
                signUpArray.push(signUp);
                localStorage.setItem("signUpArray",JSON.stringify(signUpArray));
                clearInput();
                console.log(signUpArray);
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
                
               }
   

 
  
  
}
   function isEmpty(){
                if(    signupName.value==""|| signupEmail.value==""||signupPassword.value==""){
                    return false;
            }
            else{
                return true;
            }
            }
// for clear values inputs
function clearInput(){
    signupName.value="";
    signupEmail.value="";
    signupPassword.value="";
}

// for check email 
 function checkEmail(){
        for (var i = 0; i < signUpArray.length; i++) {
            if (signupEmail.value==signUpArray[i].email) {
                return true;
            }
        }
    }

//for login
    function login(){
        if (signinPassword.value == "" || signinEmail.value == "") {
                        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
                } 
                for (var i = 0; i < signUpArray.length; i++){
                    if( signinEmail.value==signUpArray[i].email&& signinPassword.value==signUpArray[i].password){
                        localStorage.setItem("userName",signUpArray[i].name)
                   window.location.href="./home.html"
                    }
                    else{
                      document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
                    }

                    
                }
                
    }
 
// for logout
    function logout(){
        localStorage.removeItem('userName');
        window.location.href="./index.html";
    }
   


 function element(){  
    buttonAria.setAttribute('aria-expanded','true');
    elemnt.classList.toggle('show')
}





























































