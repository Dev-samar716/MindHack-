  const sita = document.getElementById("sita"); 
  const idk = document.getElementById("idk");  
const envy = document.getElementById("envy");  
const question = document.getElementById("question");  
const one = document.getElementById("option-btn");    
const btn = document.getElementById("nextBtn");


  const button = document.getElementById("submitBtn");
  button.addEventListener("click", function(){
      let input = document.getElementById("username").value; 
      sita.textContent = `Hello ${input}! You can enter quiz.` 

      if(input.startsWith(" ")) {
         idk.textContent = "You cannot begin with a space!"; 
         envy.style.display = "none";
      } else {
        idk.textContent = "Username approved!"; 
        envy.style.display = "block";
              envy.classList.add("Open"); 
              if(envy.classList.contains("Open")) {
                setTimeout(function(){
                  envy.scrollIntoView({behavior:"smooth"})
                }, 300);
              } 
              if(/\W/.test(input)) {
                idk.textContent = "You cannot use any special characters!"; 
         envy.style.display = "none"; 
         sita.textContent = "Enter Your Username";
              }
            else {
               
            } 
            if(/\d/.test(input)) {
                 idk.textContent = "You cannot use any  digits!"; 
         envy.style.display = "none"; 
          sita.textContent = "Enter Your Username";
            }
      } 
      
     if(input==="") {
       idk.textContent = "Please, enter an username!";
       sita.textContent = "Enter Your Username"; 
       envy.style.display = "none";
     } 
  })   
   




