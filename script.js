var timer = document.querySelector(".timer")
var secondsLeft = 60
var start = document.querySelector(".start")
var main = document.querySelector(".main")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var answerMain = document.querySelector(".answers-main")



var questions = [
  { q: "What tag is used to define a list item (in a bulleted list)?", answers: [
      { choice: "<li>", response: 1},
      { choice: "<ul>", response: 0},
      { choice: "<u>", response: 0},
      { choice: "<br>", response: 0},
  ]},
  { q: "What is the element used – and hidden – in code that explains things and makes the content more readable?", answers: [
      { choice: "Notes", response: 0},
      { choice: "Quotations", response: 0},
      { choice: "Comments", response: 1},
      { choice: "Marks", response: 0},
  ]},
  { q: "What is the CSS property that sets the size of the whitespace outside the borders of the content?", answers: [
    { choice: "Line", response: 0},
    { choice: "Spacer", response: 0},
    { choice: "Margin", response: 1},
    { choice: "Padding", response: 0},
  ]},
  { q: "What is the HTML tag under which one can write the JavaScript code?", answers: [
    { choice: "<javascript>", response: 0},
    { choice: "<js>", response: 0},
    { choice: "<scripted>", response: 0},
    { choice: "<script>", response: 1},
  ]},
]

start.addEventListener("click", function(){
    startQuiz()
    questionOne()
})


answerMain.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("h3")) {
    questionTwo()

    answerMain.addEventListener("click", function(event) {
      event.preventDefault();
      if(event.target.matches("h3")) {
        questionThree()

        answerMain.addEventListener("click", function(event) {
          event.preventDefault();
          if(event.target.matches("h3")) {
            questionFour()
        }
        })
      }
    })
  }
})

//Functions
function questionOne() {
  document.querySelector(".start").style.visibility = "hidden";
    main.textContent = questions[0].q
    answer1.textContent = questions[0].answers[0].choice
    answer2.textContent = questions[0].answers[1].choice
    answer3.textContent = questions[0].answers[2].choice
    answer4.textContent = questions[0].answers[3].choice

}

function questionTwo() {
  main.textContent = questions[1].q
  answer1.textContent = questions[1].answers[0].choice
  answer2.textContent = questions[1].answers[1].choice
  answer3.textContent = questions[1].answers[2].choice
  answer4.textContent = questions[1].answers[3].choice

}

function questionThree() {
  main.textContent = questions[2].q
  answer1.textContent = questions[2].answers[0].choice
  answer2.textContent = questions[2].answers[1].choice
  answer3.textContent = questions[2].answers[2].choice
  answer4.textContent = questions[2].answers[3].choice
}

function questionFour() {
  main.textContent = questions[3].q
  answer1.textContent = questions[3].answers[0].choice
  answer2.textContent = questions[3].answers[1].choice
  answer3.textContent = questions[3].answers[2].choice
  answer4.textContent = questions[3].answers[3].choice
}
          
function startQuiz() {
    //Count Down Timer
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Game Over")
      }
  
    }, 1000);
  
  }