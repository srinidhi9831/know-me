var readlinesync = require("readline-sync");
var score=0;
var userName = readlinesync.question("what's your name\n");
console.log("welcome "+userName);


function play(question,answer){
  var ans= readlinesync.question(`${question}\n`);
  if(answer.toUpperCase()===ans.toUpperCase()){
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
play("where do i study","MSRIT");
play("can you tell me my hometown","mysore");
play("whats my age","23");
play("whats my favourite color?","green");
play("whats my favourite breakfast","dosa");
play("My favourite superhero would be?","deadpool");
console.log("thank you for participating in the quiz");
console.log("your score:",score);