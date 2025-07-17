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
let point = 0; 
let stage = 1;
let fresh; 
let selected;
let hasAnswered = false;
let q = generalQuestions; 
let Currentqa = 0; 
let rd = random;   
let ticky = false;
let clock = 12;  
let countdown;

  function timeflow() {
        clearInterval(countdown); 
        if(!ticky) {
           countdown = setInterval(() => {
             timer.textContent = clock; 
             clock--;  
             if(clock < 0) {
               clearInterval(countdown); 
               wait.textContent = "Time's up!" 
               beep.play(); 
             }
           }, 1000);
        }
  }
let p = randomgen(); 
 function randomgen() {
     random = Math.floor(Math.random() * q.length);  
    selected = q[random];
    q.splice(random, 1); 
    return selected;
    
 } 


  function displayQuestion(p) { 
   score.textContent = `${point}`; 
   level.textContent = `${stage}/10`
     question.textContent = p.question; 
     one.textContent = p.options[0]; 
     two.textContent = p.options[1]; 
     three.textContent = p.options[2]; 
     four.textContent = p.options[3]; 
     timeflow();
  }
      
   function compareAns(event) { 
      selectedBtn = event.target; 
      if(selectedBtn.textContent === selected.correctAnswer) {
         selectedBtn.style.background = "green"; 
         selectedBtn.style.color = "white"; 
         point++; 
         score.textContent = `${point}`;
         correct.play();
      } else {
         selectedBtn.style.background = "red"; 
         selectedBtn.style.color = "white"; 
         wrong.play();
         wait.textContent = selected.ans;
      }
      hasAnswered = true; 
      clearInterval(countdown); 

      if(hasAnswered) {
         btn.addEventListener("click", ()=>{
               clock = 12; 
                stage++; 
                level.textContent = `${stage}/10`;
               timeflow();
         })
   }
   }  

   

    [one, two, three, four].forEach(button => {
         button.addEventListener("click", compareAns);
    })
     
    btn.addEventListener("click", ()=> {  
      timeflow();
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
        if(Currentqa<generalQuestions.length) { 
           let fresh = randomgen();
           displayQuestion(fresh)
           console.log(fresh);
         
  }  else {
         question.textContent = `Your score is ${point}`;
    greeting.textContent = "Quiz Complete!"; 
    level.textContent = "10/10";
    [one, two, three, four].forEach(btn => {
      btn.style.display = "none";
    });
    btn.disabled = true;
  }
      }

    }) 
    bn.addEventListener("click", ()=> {
          tick.play();
          fun.play();
    })

  if(Currentqa<10) {
     displayQuestion(p); 
     console.log(p);
  } 

      
       
     
