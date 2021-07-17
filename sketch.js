var canvas;
var gameState = 0;
var contestantCount;
var database;
var quiz, question, contestant;

function setup() {
  createCanvas(850, 400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}
// play === play
function draw() {
  background("pink");
  console.log(firebase.database());

  if(contestantCount ==2){
    quiz.update(1);
  }
  if(gameState ==1){
    clear();
    quiz.play();
  }
}