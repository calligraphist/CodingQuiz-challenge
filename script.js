/* define variables and assigning values using web APIs */
var startBtn =document.getElementById("startTime")
console.log(startBtn)
var timerEl=document.getElementById("timer-value")
var timeleft=75
var timeInterval;
function startGame(){
    document.getElementById("start-screen").style.display="none"
    document.getElementById("quiz-screen").style.display="block"
    timeInterval=setInterval(reducetime, 1000)
}
function reducetime(){
    timeleft--;
    timerEl.textContent=timeleft
}



/* adding eventlistiner to the button so that when clicked it will start game*/ 
startBtn.addEventListener("click", startGame)