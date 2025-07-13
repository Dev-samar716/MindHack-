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
const timer = document.getElementById("timer");   
 let clock = 15;  
 let timedone = false; 
 let countdown;

      function showTimer() {  
        clearInterval(countdown);
        if(!timedone) {
          countdown = setInterval(() => {
    timer.textContent = clock; 
    clock--; 
    if(clock < 0) {
       clearInterval(countdown);
    }
   }, 1000); 

   
        }
        
      }
   
    

 timer.textContent = clock;
              
                      
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
    correct: "Python",
    ans: "The correct answer is python"
  },
  {
    question: "What is the capital city of Nepal?",
    options: ["Butwal", "Kathmandu", "Pokhara", "Nepalgunj"],
    correct: "Kathmandu", 
    ans: "The correct answer is Kathmandu"
  }, {
     question: "Who is the father of computer?",
     options: ["Nicola tesla", "Charles babbage", "Tony stark", "Openheimer"],
    correct: "Charles babbage", 
    ans: "The correct answer is Charles babbage"
  }, 
  {
    question: "What is the color of sun?",
     options: ["yellow", "Red", "Orange", "White"],
    correct: "White",
    ans: "The correct answer is White"
  }, 
  {
    question: "How old is our Univere?",
     options: ["15 billion years", "14 billion years", "13.8 billion years", "12 billion years"],
    correct: "13.8 billion years",  
    ans: "The correct answer is 13.8 billon years"
  }, 
  {
    question: "Which food is effective against cancer?",
     options: ["Mushrooms", "Roti", "Paneer", "Carrots"],
    correct: "Mushrooms", 
    ans: "The correct answer is Mushrooms"
  }, 
  {
     question: "Which Vitamin makes your bones stronger?",
     options: ["Vitamin-A", "Vitamin-B", "Vitamin-K", "Vitamin-D"],
    correct: "Vitamin-D", 
    ans: "The correct answer is Vitamin-D"
  }, 
  {
    question: "Where is mount fuji located?",
     options: ["Bangaladesh", "Japan", "China", "South korea"],
    correct: "Japan", 
    ans: "The correct answer is Japan"
  }, 
   {
    question: "Which branch of engineering deals with manufacturing of vehicles?",
     options: ["Software Engineering", "Civil Engineering", "Automobile engineering", "Electrical Engineering"],
    correct: "Automobile engineering", 
    ans: "The correct answer is Automobile engineering"
   }, {
     question: "What is the name of galaxy that we are living in?",
     options: ["Milky way", "Andrometa", "Vortex", "Neowaves"],
    correct: "Milky way", 
    ans: "The correct answer is Milky way"
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
    wait.textContent= ""; 
    clock = 15; 
    showTimer(); 
    timedone = false;
    
  });

  hasAnswered = false; 
  timedone = false;
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
    wait.textContent = questions[Currentqa].ans; 
    wrong.play();
  }

  hasAnswered = true; 
  timedone = true; 

  if(timedone) {
     clearInterval(countdown); 
     return;
  }
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
