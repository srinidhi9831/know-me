var readlinesync = require("readline-sync");
var score=0;
var userName = readlinesync.question("what's your name");
console.log("welcome "+userName);

function play(question,answer){
  var ans= readlinesync.question(question);
  if(answer===ans){
    console.log("you are right");
    score=score+1;
  }
  else{
    console.log("wrong!");
  }

  console.log(" current score : ",score);
  console.log("------------------------");
}

play("whats my name","srinidhi");
play("where do i live ?","bangalore");
play("where do i study","MSRIT")
console.log("thank you for participating in the quiz");
