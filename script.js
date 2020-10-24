var timer = document.querySelector(".timer")
var secondsLeft = 60
var start = document.querySelector(".start")
var main = document.querySelector(".main")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var answerMain = document.querySelector(".answers-main")
var result = document.querySelector(".result")
var inputMain = document.querySelector(".input-main")
var submitButton = document.querySelector(".submit-button")
var btn = document.querySelector(".btn")

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
btn.style.visibility = "hidden"
answerMain.style.visibility = "hidden"
start.addEventListener("click", function(){
    startQuiz()
    questionOne()
    answerMain.style.visibility = "visible"
})




//Functions
function questionOne() {
  document.querySelector(".start").style.visibility = "hidden";
    main.textContent = questions[0].q
    answer1.textContent = questions[0].answers[0].choice
    answer2.textContent = questions[0].answers[1].choice
    answer3.textContent = questions[0].answers[2].choice
    answer4.textContent = questions[0].answers[3].choice


answerMain.addEventListener("click", function(event) {
  
  if(event.target.matches("h3") && event.target.getAttribute("class") === "answer1") {
    questionTwo()
    result.textContent = "Question One Correct!"
    setTimeout(function(){ result.style.visibility = "hidden"; }, 800);
  } else { 
    result.textContent = "Question one Incorrect"
    setTimeout(function(){ result.style.visibility = "hidden"; }, 800);
    questionTwo()
  }
})
    

}

function questionTwo() {
  main.textContent = questions[1].q
  answer1.textContent = questions[1].answers[0].choice
  answer2.textContent = questions[1].answers[1].choice
  answer3.textContent = questions[1].answers[2].choice
  answer4.textContent = questions[1].answers[3].choice

  answerMain.addEventListener("click", function(event) {
    
    if(event.target.matches("h3") && event.target.getAttribute("class") === "answer3") {
      questionThree()
      result.textContent = "Question Two Correct!"
      result.style.visibility = "visible";
      setTimeout(function(){ result.style.visibility = "hidden"; }, 800);
    } else {
      result.textContent = "Question Two Incorrect"
      result.style.visibility = "visible";
      questionThree()
      setTimeout(function(){ result.style.visibility = "hidden"; }, 800);
    }

})
}
function questionThree() {
  main.textContent = questions[2].q
  answer1.textContent = questions[2].answers[0].choice
  answer2.textContent = questions[2].answers[1].choice
  answer3.textContent = questions[2].answers[2].choice
  answer4.textContent = questions[2].answers[3].choice

  answerMain.addEventListener("click", function(event) {
    
    if(event.target.matches("h3") && event.target.getAttribute("class") === "answer3") {
      questionFour()
      result.textContent = "Question Three Correct!"
      result.style.visibility = "visible";
      setTimeout(function(){ result.style.visibility = "hidden"; }, 800);
    } else {
      result.textContent = "Question Three Incorrect"
      result.style.visibility = "visible";
      questionFour()
      setTimeout(function(){ result.style.visibility = "hidden"; }, 800);
    }
  })
}

function questionFour() {
  main.textContent = questions[3].q
  answer1.textContent = questions[3].answers[0].choice
  answer2.textContent = questions[3].answers[1].choice
  answer3.textContent = questions[3].answers[2].choice
  answer4.textContent = questions[3].answers[3].choice

  answerMain.addEventListener("click", function(event) {
  
      if(event.target.matches("h3") && event.target.getAttribute("class") === "answer4") {
        scorePage()
        result.textContent = "Question Four Correct!"
        result.style.visibility = "visible";
        setTimeout(function(){ result.style.visibility = "hidden"; }, 800);
      } else {
        result.textContent = "Question Four Incorrect"
        result.style.visibility = "visible";
        setTimeout(function(){ result.style.visibility = "hidden"; }, 800);
        scorePage()
      }
    })
}

function scorePage() {
  main.textContent = "Your Score Is: " + secondsLeft
  timer.style.visibility = "hidden";
  answer1.style.visibility = "hidden";
  answer2.style.visibility = "hidden";
  answer3.style.visibility = "hidden";
  answer4.style.visibility = "hidden";
  btn.style.visibility = "visible"
  var name = document.createElement("h3");
  name.textContent = "Enter Your Name"
  inputMain.append(name)
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  inputMain.append(input)
  btn.addEventListener("click", function(){
  var scoreNum = input.value + "  Score: " + secondsLeft
  localStorage.setItem("score", scoreNum)
  console.log(input.value)
  
  })
}

          
function startQuiz() {
    //Count Down Timer
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert("Game Over")
    
      }
  
    }, 1000);
  
}

