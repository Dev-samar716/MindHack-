const hardQuestions = [
  {
    question: "What is the only country that is also a continent?",
    options: ["Australia", "Greenland", "Antarctica", "South Africa"],
    correctAnswer: "Australia",
    ans: "Australia is the only country that is also considered a continent."
  },
  {
    question: "Which gas makes up most of the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    correctAnswer: "Nitrogen",
    ans: "About 78% of Earth's atmosphere is nitrogen."
  },
  {
    question: "Who developed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
    correctAnswer: "Albert Einstein",
    ans: "Albert Einstein developed the theory of general relativity in 1915."
  },
  {
    question: "Which organ of the human body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    correctAnswer: "Pancreas",
    ans: "The pancreas produces insulin, which helps regulate blood sugar."
  },
  {
    question: "What is the capital of Switzerland?",
    options: ["Zurich", "Geneva", "Bern", "Basel"],
    correctAnswer: "Bern",
    ans: "Bern is the official capital of Switzerland."
  },
  {
    question: "Which element has the highest electrical conductivity?",
    options: ["Copper", "Aluminum", "Silver", "Gold"],
    correctAnswer: "Silver",
    ans: "Silver is the most electrically conductive element."
  },
  {
    question: "Who wrote the philosophical work 'The Republic'?",
    options: ["Plato", "Socrates", "Aristotle", "Descartes"],
    correctAnswer: "Plato",
    ans: "Plato wrote 'The Republic', a foundational text in Western philosophy."
  },
  {
    question: "Which planet has the longest day in the solar system?",
    options: ["Venus", "Jupiter", "Mars", "Neptune"],
    correctAnswer: "Venus",
    ans: "Venus has the longest day — one rotation takes 243 Earth days."
  },
  {
    question: "In computing, what does 'CPU' stand for?",
    options: ["Central Processing Unit", "Computer Power Unit", "Core Processing Unit", "Central Program Utility"],
    correctAnswer: "Central Processing Unit",
    ans: "CPU stands for Central Processing Unit — the 'brain' of a computer."
  },
  {
    question: "Which civilization built Machu Picchu?",
    options: ["Aztecs", "Romans", "Mayans", "Incas"],
    correctAnswer: "Incas",
    ans: "Machu Picchu was built by the Inca civilization in the 15th century."
  }
];
 
 let random = Math.floor(Math.random() * hardQuestions.length); 
 let storage = random;