function login(){
username1=document.getElementById("p1").value;
username2=document.getElementById("p2").value;
localStorage.setItem("un1",username1);
localStorage.setItem("un2",username2);
window.location="play.html";

}