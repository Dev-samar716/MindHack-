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
const watch = document.getElementById("clock-emoji"); 
const tick = document.getElementById("tick");  
const beep = document.getElementById("beep"); 
let fresh; 
let selected;
let hasAnswered = false;
let q = generalQuestions; 
let Currentqa = 0; 
let rd = random;   
let p = randomgen(); 
 function randomgen() {
     random = Math.floor(Math.random() * q.length);  
    selected = q[random];
    q.splice(random, 1); 
    return selected;
    
 } 

  function displayQuestion(p) { 
     question.textContent = p.question; 
     one.textContent = p.options[0]; 
     two.textContent = p.options[1]; 
     three.textContent = p.options[2]; 
     four.textContent = p.options[3]; 
  }
      
   function compareAns(event) { 
    event.preventDefault(); 
      selectedBtn = event.target; 
      if(selectedBtn.textContent === selected.correctAnswer) {
         selectedBtn.style.background = "green"; 
         selectedBtn.style.color = "white";
         correct.play();
      } else {
         selectedBtn.style.background = "red"; 
         selectedBtn.style.color = "white"; 
         wrong.play();
         wait.textContent = selected.ans;
      }
      hasAnswered = true;
   } 

    [one, two, three, four].forEach(button => {
         button.addEventListener("click", compareAns);
    })
     
    btn.addEventListener("click", ()=> {  
       one.style.background = "" 
       two.style.background = "" 
       three.style.background = "" 
       four.style.background = "" 
       one.style.color = "" 
       two.style.color= "" 
       three.style.color = "" 
       four.style.color = "" 
       wait.textContent = ""
       
      if(!hasAnswered) {
         alert("Please select an answer before moving forward!")
      } else if(hasAnswered) {
        if(Currentqa<hardQuestions.length) { 
           let fresh = randomgen();
           displayQuestion(fresh)
           console.log(fresh);
     
  } 
      }

    })

  if(Currentqa<10) {
     displayQuestion(p); 
     console.log(p);
  } 