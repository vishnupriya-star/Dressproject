function login(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username=="Vishnu" && password=="Mithu@134"){
        document.getElementById("Result").innerHTML="Registration Successfully";
        window.location.href="dashboard.html";
    }
    else{
        document.getElementById("Result").innerHTML="Invalid Username & Password";
    }
}