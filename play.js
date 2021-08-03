p1name=localStorage.getItem("un1");
p2name=localStorage.getItem("un2");
p1score=0;
p2score=0;
document.getElementById("player1name").innerHTML=p1name+" : ";
document.getElementById("player2name").innerHTML=p2name+" : ";
document.getElementById("player1score").innerHTML=p1score;
document.getElementById("player2score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="question turn: " + p1name;
document.getElementById("player_answer").innerHTML="answer turn: " + p2name;
function send(){
get_word=document.getElementById("word").value;
final_word=get_word.toLowerCase();
c1=final_word.charAt(0);
divide=Math.floor(final_word.length/2);
c2=final_word.charAt(divide);
number=final_word.length-1;
c3=final_word.charAt(number);
removec1=final_word.replace(c1,"_");
removec2=removec1.replace(c2,"_");
myword=removec2.replace(c3,"_");

qword="<h4 id = 'word_display'> Q. "+myword+"</h4>";
abox="<br>Answer: <input type='text' id='input_check_box'>";
b2="<br><br><button class='btn btn-danger' onclick = 'check()'>Check</button>";
show=qword+abox+b2;
document.getElementById("output").innerHTML=show;
document.getElementById("word"). value="";

}

qturn="player1";
aturn="player2";
function check(){
getanswer=document.getElementById("input_check_box").value;
answer=getanswer.toLowerCase();
if(answer==final_word){
if (aturn=="player1"){
p1score=p1score+1;
document.getElementById("player1score").innerHTML=p1score;
}
else{
p2score=p2score+1;
document.getElementById("player2score").innerHTML=p2score;
}
}
if(qturn=="player1"){
qturn="player2";
document.getElementById("player_question").innerHTML="Question turn: "+p2name;
}
else{
qturn="player1";
document.getElementById("player_question").innerHTML="Question turn: "+p1name;    
}
if(aturn=="player1"){
aturn="player2";
document.getElementById("player_answer").innerHTML="Answer turn: "+p2name;
}
else{
aturn="player1";
document.getElementById("player_answer").innerHTML="Answer turn: "+p1name;
}
document.getElementById("output").innerHTML="";
}