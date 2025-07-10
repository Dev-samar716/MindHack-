const question = document.getElementById("question");
const one = document.getElementById("option-btn");
const two = document.getElementById("option-btn2");
const three = document.getElementById("option-btn3");
const four = document.getElementById("option-btn4");
const btn = document.getElementById("nextBtn");
const score = document.getElementById("score");
const level = document.getElementById("progress");
const wait =  document.getElementById("wait"); 
const greeting =  document.getElementById("greeting"); 
const wrong = document.getElementById("wrongSound"); 
const correct = document.getElementById("correctSound");
const warning = document.getElementById("warning"); 
const fun = document.getElementById("fun"); 
const bn = document.getElementById("volumeBtn");
let point = 0;
let stage = 1;
let hasAnswered = false;
let Currentqa = 0; 
let Ismuted = true; 

 function unmute() {
    if(Ismuted===false) {
       return;
    } else {
       fun.play() 
       Ismuted = false;
    }
 } 
 bn.addEventListener("click", ()=>unmute())
const questions = [
  {
    question: "Which programming language is widely recognized as the easiest?",
    options: ["Java", "C", "Python", "Javascript"],
    correct: "Python"
  },
  {
    question: "What is the capital city of Nepal?",
    options: ["Butwal", "Kathmandu", "Pokhara", "Nepalgunj"],
    correct: "Kathmandu"
  }, {
     question: "Who is the father of computer science?",
     options: ["Nicola tesla", "Charles babbage", "Tony stark", "Openheimer"],
    correct: "Charles babbage"
  }, 
  {
    question: "What is the color of sun?",
     options: ["yellow", "Red", "Orange", "White"],
    correct: "White"
  }, 
  {
    question: "How old is our Univere?",
     options: ["15 billion years", "14 billion years", "13.8 billion years", "12 billion years"],
    correct: "13.8 billion years"
  }, 
  {
    question: "Which food is effective against cancer?",
     options: ["Mushrooms", "Roti", "Paneer", "Carrots"],
    correct: "Mushrooms"
  }, 
  {
     question: "Which Vitamin makes your bones stronger?",
     options: ["Vitamin-A", "Vitamin-B", "Vitamin-K", "Vitamin-D"],
    correct: "Vitamin-D"
  }, 
  {
    question: "Where is mount fuji located?",
     options: ["Bangaladesh", "Japan", "China", "South korea"],
    correct: "Japan"
  }, 
   {
    question: "Which branch of engineering deals with manufacturing of vehicles?",
     options: ["Software Engineering", "Civil Engineering", "Automobile engineering", "Electrical Engineering"],
    correct: "Automobile engineering"
   }, {
     question: "What is the name of galaxy that we are living in?",
     options: ["Milky way", "Andrometa", "Vortex", "Neowaves"],
    correct: "Milky way"
   }
];
       
function displayQuestion(q) {
  question.textContent = q.question;
  one.textContent = q.options[0];
  two.textContent = q.options[1];
  three.textContent = q.options[2];
  four.textContent = q.options[3]; 
  level.textContent = `${stage}/10`; 

  // Reset button colors
  [one, two, three, four].forEach(btn => {
    btn.style.background = "white";
    btn.style.color = "";
  });

  hasAnswered = false;
}

function compareAns(event) {
  if (hasAnswered) return; // Prevent multiple clicks

  const selectedbtn = event.target;

  if (selectedbtn.textContent === questions[Currentqa].correct) {
    selectedbtn.style.background = "green";
    selectedbtn.style.color = "white";
    point++;
    score.textContent = `${point}`; 
    correct.play();
  } else {
    selectedbtn.style.background = "red";
    selectedbtn.style.color = "white"; 
    
    wrong.play();
  }

  hasAnswered = true;
}

[one, two, three, four].forEach(button => {
  button.addEventListener("click", compareAns);
});

btn.addEventListener("click", () => {
  if (!hasAnswered) { 
    warning.play();
    alert("Please select an answer before proceeding!"); 
    return;
  }

  stage++;
  level.textContent = `${stage}/${questions.length}`;

  Currentqa++;
  if (Currentqa < questions.length) {
    displayQuestion(questions[Currentqa]);
  } else {
    question.textContent = `Your score is ${point}`;
    greeting.textContent = "Quiz Complete!"; 
    level.textContent = "10/10";
    [one, two, three, four].forEach(btn => {
      btn.style.display = "none";
    });
    btn.disabled = true;
  }
});

// Start the quiz
displayQuestion(questions[Currentqa]);
