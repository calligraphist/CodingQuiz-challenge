//define variables and assigning values using web APIs 
var startBtn =document.getElementById("startTime")
console.log(startBtn)
var qi=0
var timerEl=document.getElementById("timer-value")
var scoreEl=document.getElementById("score-value")
var score=0
scoreEl.textContent=score
var timeleft=75
var timeInterval;
function startGame(){
    document.getElementById("start-screen").style.display="none"
    document.getElementById("quiz-screen").style.display="block"
    timeInterval=setInterval(reducetime, 1000)
    askquestion();
}

function endGame(){
    document.getElementById("question-text").textContent="Well Done! Youe final score is "+ timeleft+".",
    document.getElementById("answer-box").innerHTML="";
    clearInterval(timeInterval);
    document.getElementById("final-score").style.display="block";
    }

    function askquestion(){
        document.getElementById("question-text").textContent=questions[qi].title,
        document.getElementById("answer-box").innerHTML=""
        questions[qi].choices.forEach(function(choice){
            console.log(choice);
            var button= document.createElement("button");
            button.style.backgroundColor="purple";
            button.style.color="white";
           
            button.textContent=choice;
            button.setAttribute("value", choice)
            button.onclick=function(){
                // setting panelty
               if(this.value !== questions[qi].answer){
                timeleft -= 15
                //displaymessage = wrong;
               }
               else{
                score++
                scoreEl.textContent=score;
               // displaymessage = correct;
               }
               qi++;
               if(qi===questions.length){
                endGame();
               }
               else{
                askquestion();
               }
            }
            // Action to be performed on click store in named function
            
            document.getElementById("answer-box").append(button);
        })
    }
// Timer that counts down from 75
function reducetime(){
    if (timeleft > 0) {
        timerEl.textContent = timeleft;
        timeleft--;
        timerEl.textContent=timeleft;
    }
}

//defining questions, options and answers

var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool, used for development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
]

var submitButton = document.getElementById("submit-button");

// btn.addEventListener('click', function(){
//   var initials = document.getElementById("initials").value;
//   alert("initials: "+ initials);
// });
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
   var initial = document.getElementById("initials").value;
    // create user object from submission
    var finalScore = {
        initials: initial,
      finalScore: timeleft,
    };
  
    // set new submission to local storage 
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
    
  });
  
// localStorage.setItem("score", JSON.stringify(timeInterval));
renderMessage();

function renderMessage() {
  var highScore = JSON.parse(localStorage.getItem("finalScore"));
  if (highScore !== null) {
 //   document.querySelector(".message").textContent = "your score is" + 
   // highScore.initials + " "+highScore.finalScore
  console.log("your score is" + highScore.initials + " "+highScore.finalScore)  
}
}

//adding eventlistiner to the button so that when clicked it will start game.
startBtn.addEventListener("click", startGame)
