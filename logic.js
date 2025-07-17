  const sita = document.getElementById("sita"); 
  const idk = document.getElementById("idk");  
const envy = document.getElementById("envy");  
const question = document.getElementById("question");  
const one = document.getElementById("option-btn");    
const btn = document.getElementById("nextBtn"); 
const sky = document.getElementById("easy");
const sky2 = document.getElementById("medium"); 
const sky3 = document.getElementById("Hard"); 
const e = document.getElementById("joy");
const m = document.getElementById("medium"); 
const H = document.getElementById("Hard"); 
const h = document.getElementById("sorrow");
let ms = true;
let check = false; 
 
inputGiven = false;
  
   

  const button = document.getElementById("submitBtn");
  button.addEventListener("click", function(){ 
    let validUsername = true;
      let input = document.getElementById("username").value; 
      sita.textContent = `Hello ${input}! You can enter quiz.` 
     

      if(input.startsWith(" ")) {
         idk.textContent = "You cannot begin with a space!"; 
         envy.style.display = "none"; 
         approveduser = false; 
         inputGiven = true; 
         validUsername = false;
      } else { 
        
        idk.textContent = "Username approved!"; 

              inputGiven = true;
              if(/\W/.test(input)) {
                idk.textContent = "You cannot use any special characters or spaces!"; 
         envy.style.display = "none"; 
         sita.textContent = "Enter Your Username";  
         validUsername = false;
         approveduser = false; 
         inputGiven = true;
              }
            else {
              
            } 
            if(/\d/.test(input)) {
                 idk.textContent = "You cannot use any  digits!"; 
         envy.style.display = "none"; 
          sita.textContent = "Enter Your Username"; 
          validUsername = false;
          inputGiven = true;
          
            } 
      } 
     let ms = true; // default state: valid username

if (input==="") {
    idk.textContent = "Please, enter a username!"; 
    sita.textContent = "Enter Your Username";
    envy.style.display = "none"; 
    validUsername = false;
    ms = false;  
    
    
}
if(input.length < 3 && input.length >0) { 
  validUsername = false;
  idk.textContent = `${input} doesn't look like a suitable username!` 
  sita.textContent = "Enter Your Username"; !important;  
     envy.style.setProperty("display","none","important");
     joy.style.setProperty("display","none","important");

}
// Check for valid username and selected difficulty
if (validUsername) {
    if (easy.checked || medium.checked || Hard.checked) {
        sita.textContent = `Welcome ${input}! You can enter quiz.`;
        idk.textContent = "";

        // Show corresponding difficulty block
        if (easy.checked) {
            e.style.display = "block"; 
             check = true; 
             e.classList.add("Open"); 
             if(e.classList.contains("Open")) {
                setTimeout(function() {
                  e.scrollIntoView({behavior:"smooth"})
                },300);
             } 
              Hard.disabled = true; 
             medium.disabled = true;
        } else {
            e.style.display = "none"; 
            check = false;
        } 

        if (medium.checked) {
    if (validUsername) {
        envy.style.display = "block";
        envy.classList.add("Open");
        if (envy.classList.contains("Open")) {
            setTimeout(function () {
                envy.scrollIntoView({ behavior: "smooth" });
            }, 300);
        } 
         Hard.disabled = true; 
             easy.disabled = true;
    } else {
        envy.style.display = "none";
    }
}             
        if(Hard.checked) {
             sorrow.style.display = "block"; 
             sorrow.classList.add("Open"); 
             if(sorrow.classList.contains("Open")) {
               setTimeout(function() {
                sorrow.scrollIntoView({behavior:"smooth"});
               },300);
             } 
             medium.disabled = true; 
             easy.disabled = true;
        }


    } else {
        envy.style.display = "none";
        sita.textContent = `Hello ${input}! Please select a difficulty level!`;
    }
}

           

   
  })   

   
   




