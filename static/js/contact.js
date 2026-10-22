console.log("CONTACT JS LOADED");
function Register(){
    let Name=document.getElementById("Name").value;
    let Email=document.getElementById("Email").value;
    let Subject=document.getElementById("Subject").value;
    let Message=document.getElementById("Message").value;

    if(Name =="" || Email =="" || Subject =="" ||Message ==""){
        document.getElementById("Result").innerHTML="Please Fill all Fields";
    }
    else{
        alert("Registration Successfully");
        window.location.href="/";
    }
}