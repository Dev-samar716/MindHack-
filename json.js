const generalQuestions = [
  {
    question: "What can you break, even if you never touch it?",
    options: ["Glass", "Silence", "Promise", "Friendship"],
    correctAnswer: "Promise",
    ans: "You can break a promise even if you never touch it."
  },
  {
    question: "How many generations of computer are there?",
    options: ["2", "4", "3", "5"],
    correctAnswer: "5",
    ans: "There are 5 generations of computers."
  },
  {
    question: "Which country has a leaf on its flag?",
    options: ["Canada", "Brazil", "India", "bhutan"],
    correctAnswer: "Canada",
    ans: "Canada has a maple leaf on its national flag."
  },
  {
    question: "If you freeze water, what do you get?",
    options: ["Ice", "Snow", "Mist", "Steam"],
    correctAnswer: "Ice",
    ans: "When you freeze water, you get ice."
  },
  {
    question: "Which word is always spelled incorrectly in the dictionary?",
    options: ["Misspelled", "Incorrect", "Wrong", "Incorrectly"],
    correctAnswer: "Incorrectly",
    ans: "The word 'incorrectly' is always spelled 'incorrectly' in the dictionary."
  },
  {
    question: "Which shape has 4 equal sides and 4 right angles?",
    options: ["Rectangle", "Diamond", "Square", "Rhombus"],
    correctAnswer: "Square",
    ans: "A square has 4 equal sides and 4 right angles."
  },
  {
    question: "How many legs does a butterfly have?",
    options: ["4", "6", "8", "2"],
    correctAnswer: "6",
    ans: "A butterfly has 6 legs."
  },
  {
    question: "Which planet has the most moons?",
    options: ["Earth", "Mars", "Saturn", "Venus"],
    correctAnswer: "Saturn",
    ans: "Saturn has the most moons of any planet."
  },
  {
    question: "Who is the world's richest person?",
    options: ["Mark Zuckerberg", "Elon Musk", "Ratan Tata", "Mukesh Ambani"],
    correctAnswer: "Elon Musk",
    ans: "As of now, Elon Musk is the world's richest person."
  },
  {
    question: "Which animal can sleep while standing up?",
    options: ["Cat", "buffalo", "Cow", "Dog"],
    correctAnswer: "Cow",
    ans: "A cow can sleep while standing up."
  }
];

 
   let random = Math.floor(Math.random() * generalQuestions.length); 
   let storage = random;
   
   
   
 