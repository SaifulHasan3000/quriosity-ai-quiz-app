// document.addEventListener("DOMContentLoaded", () => {
//     const startButton = document.getElementById("start");
//     const quizContainer = document.getElementById("quiz");
//     const topicInput = document.getElementById("topic");
//     const questionElement = document.getElementById("question");
//     const optionsContainer = document.getElementById("options");
//     const resultElement = document.getElementById("result");
//     const nextButton = document.getElementById("next");
  
//     let questions = [];
//     let currentQuestionIndex = 0;
//     let score = 0;
  
//     async function fetchQuestionsFromBackend(topic) {
//       try {
//         const response = await fetch(`/api/getQuestions?topic=${topic}`);
//         const data = await response.json();
//         questions = data.questions;
//         displayQuestion();
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     }
  
//     function displayQuestion() {
//       const currentQuestion = questions[currentQuestionIndex];
//       questionElement.textContent = currentQuestion.question;
//       optionsContainer.innerHTML = "";
  
//       currentQuestion.options.forEach((option, index) => {
//         const optionButton = document.createElement("button");
//         optionButton.classList.add("option");
//         optionButton.textContent = option;
//         optionButton.dataset.option = index + 1;
//         optionButton.addEventListener("click", selectAnswer);
//         optionsContainer.appendChild(optionButton);
//       });
  
//       resultElement.textContent = "";
//       nextButton.style.display = "none";
//     }
  
//     function selectAnswer(event) {
//       const selectedOptionIndex = parseInt(event.target.dataset.option);
//       const currentQuestion = questions[currentQuestionIndex];
//       const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;
  
//       if (isCorrect) {
//         score++;
//         resultElement.textContent = "Correct!";
//       } else {
//         resultElement.textContent = "Oops! It's the wrong answer.";
//       }
  
//       showNextButton();
//     }
  
//     function showNextButton() {
//       if (currentQuestionIndex < questions.length - 1) {
//         nextButton.style.display = "block";
//       } else {
//         showScore();
//       }
//     }
  
//     function showScore() {
//       quizContainer.classList.add("hidden");
//       resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     }
  
//     startButton.addEventListener("click", () => {
//       const topic = topicInput.value;
//       if (topic.trim() !== "") {
//         fetchQuestionsFromBackend(topic);
//         quizContainer.classList.remove("hidden");
//         document.getElementById("topic-input").classList.add("hidden");
//       }
//     });
  
//     nextButton.addEventListener("click", () => {
//       currentQuestionIndex++;
//       displayQuestion();
//     });
//   });
  



// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");

//   let questions = [];
//   let currentQuestionIndex = 0;
//   let score = 0;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option;
//       optionButton.dataset.option = index + 1;
//       optionButton.addEventListener("click", selectAnswer);
//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//   }

//   function selectAnswer(event) {
//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     showNextButton();
//   }

//   function showNextButton() {
//     if (currentQuestionIndex < questions.length - 1) {
//       nextButton.style.display = "block";
//     } else {
//       showScore();
//     }
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "") {
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });
// });



// oNE QUESTION BEING DISPLAYED NICELY
// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");

//   let questions = [];
//   let currentQuestionIndex = 0;
//   let score = 0;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option;
//       optionButton.dataset.option = index + 1;
//       optionButton.addEventListener("click", selectAnswer);
//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//   }

//   function selectAnswer(event) {
//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     showNextButton();
//   }

//   function showNextButton() {
//     if (currentQuestionIndex < questions.length - 1) {
//       nextButton.style.display = "block";
//     } else {
//       showScore();
//     }
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "") {
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });
// });





// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false; // To keep track if the quiz has started

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option;
//       optionButton.dataset.option = index + 1;
//       optionButton.addEventListener("click", selectAnswer);
//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//   }

//   function selectAnswer(event) {
//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     showNextButton();
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "" && !hasStarted) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       displayQuestion();
//     } else {
//       showScore();
//     }
//   });
// });







// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option;
//       optionButton.dataset.option = index + 1;
//       optionButton.addEventListener("click", selectAnswer);
//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//   }

//   function selectAnswer(event) {
//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     showNextButton();
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//   }

//   function showScore() {
//     // quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "" && !hasStarted) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       displayQuestion();
//     } else {
//       showScore();
//     }
//   });
// });




// QUESTION STAEMENT AND OPTIONS GETTING DISPLAYED ON SEPARATE LINES
// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>"); // Add line breaks
//     optionsContainer.innerHTML = "";
  
//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, ""); // Remove line breaks from options
//       optionButton.dataset.option = index + 1;
//       optionButton.addEventListener("click", selectAnswer);
//       optionsContainer.appendChild(optionButton);
//     });
  
//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//   }
  

//   function selectAnswer(event) {
//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     showNextButton();
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//   }

//   function showScore() {
//     // quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "" && !hasStarted) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       displayQuestion();
//     } else {
//       showScore();
//     }
//   });
// });




// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     resetOptionColors(); // Reset option button colors before displaying the new question

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>"); // Add line breaks
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, ""); // Remove line breaks from options
//       optionButton.dataset.option = index + 1;
//       optionButton.addEventListener("click", selectAnswer);
//       optionButton.addEventListener("mouseover", highlightOption); // Highlight on mouseover
//       optionButton.addEventListener("mouseout", resetOptionColor); // Reset color on mouseout
//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//   }

//   function selectAnswer(event) {
//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green"; // Change color to green for correct answer
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red"; // Change color to red for wrong answer
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     showNextButton();
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//   }

//   function resetOptionColors() {
//     // Reset all option button colors to default white when displaying a new question
//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => (button.style.backgroundColor = "#fff"));
//   }

//   // Highlight option on mouseover
//   function highlightOption(event) {
//     event.target.style.backgroundColor = "blue";
//   }

//   // Reset option color on mouseout
//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function showScore() {
//     // quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "" && !hasStarted) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       displayQuestion();
//     } else {
//       showScore();
//     }
//   });
// });


// WORKING FINE, IT CAN HIGHLIGHT THE OPTION ON HOVER AND CHANGE THE COLOUR TO RED OR GREEN ON BEING CORRCT OR INCORRECT
// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>"); // Add line breaks
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, ""); // Remove line breaks from options
//       optionButton.dataset.option = index + 1;

//       // Add event listeners for hover and click on each option button
//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//   }

//   function highlightOption(event) {
//     // Change color to blue on hover
//     event.target.style.backgroundColor = "blue";
//   }

//   function resetOptionColor(event) {
//     // Reset the background color to white when the mouse moves away
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green"; // Change color to green for correct answer
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red"; // Change color to red for wrong answer
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     // Remove the event listeners for hover and click to keep the colors permanent
//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     // Disable all option buttons to prevent further selection
//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     showNextButton();
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//   }

//   function showScore() {
//     // quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "" && !hasStarted) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       displayQuestion();
//     } else {
//       showScore();
//     }
//   });
// });


// THIS CODE IS GENERATING THE SAME QUIZ AGAIN FOR THE USER TO REATTEMPT THE SAME QUIZ
// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit"); // New Submit button
//   const restartButton = document.getElementById("restart"); // New Restart Quiz button

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let quizEnded = false;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       quizEnded = false; // Reset quizEnded flag
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>"); // Add line breaks
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, ""); // Remove line breaks from options
//       optionButton.dataset.option = index + 1;

//       // Add event listeners for hover and click on each option button
//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";

//     if (currentQuestionIndex === questions.length - 1 && !quizEnded) {
//       nextButton.style.display = "none";
//       submitButton.style.display = "block";
//     } else {
//       nextButton.style.display = "block";
//       submitButton.style.display = "none";
//     }
//   }

//   function highlightOption(event) {
//     // Change color to blue on hover
//     event.target.style.backgroundColor = "blue";
//   }

//   function resetOptionColor(event) {
//     // Reset the background color to white when the mouse moves away
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (quizEnded) return; // Prevent further selection after quiz ends

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green"; // Change color to green for correct answer
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red"; // Change color to red for wrong answer
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     // Remove the event listeners for hover and click to keep the colors permanent
//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     // Disable all option buttons to prevent further selection
//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       quizEnded = true;
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//   }

//   function showSubmitButton() {
//     submitButton.style.display = "block";
//   }

//   function showScore() {
//     // quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block"; // Display the Restart Quiz button after showing the score
//   }

//   function restartQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     quizEnded = false;
//     displayQuestion();
//     resultElement.textContent = ""; // Clear the previous score text
//     restartButton.style.display = "none"; // Hide the Restart Quiz button again
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "" && !hasStarted) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     showScore();
//   });

//   restartButton.addEventListener("click", () => {
//     restartQuiz();
//   });
// });






// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit"); // New submit button
//   const restartButton = document.getElementById("restart"); // New restart button

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none"; // Hide the Submit button
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "blue";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       // Last question reached
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none"; // Hide the Submit button
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block"; // Show the Submit button
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block"; // Show the Restart Quiz button
//   }

//   function restartQuiz() {
//     hasStarted = false;
//     isQuizFinished = false;
//     questions = [];
//     currentQuestionIndex = 0;
//     score = 0;
//     resultElement.textContent = "";
//     restartButton.style.display = "none"; // Hide the Restart Quiz button
//     topicInput.value = "";
//     document.getElementById("topic-input").classList.remove("hidden");
//     quizContainer.classList.add("hidden");
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "" && !hasStarted) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       document.getElementById("topic-input").classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     isQuizFinished = true;
//     displayQuestion();
//   });

//   restartButton.addEventListener("click", () => {
//     restartQuiz();
//   });
// });





// Working fine with giving the chance to restart the quiz
// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit");
//   const restartButton = document.getElementById("restart");
//   const topicInputContainer = document.getElementById("topic-input");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;

//   async function fetchQuestionsFromBackend(topic) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none"; // Hide the Submit button
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "blue";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       // Last question reached
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none"; // Hide the Submit button
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block"; // Show the Submit button
//   }

//   function hideSubmitButton() {
//     submitButton.style.display = "none"; // Hide the Submit button
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block"; // Show the Restart Quiz button
//     hideSubmitButton(); // Hide the Submit button when showing the score
//   }

//   function restartQuiz() {
//     hasStarted = false;
//     isQuizFinished = false;
//     questions = [];
//     currentQuestionIndex = 0;
//     score = 0;
//     resultElement.textContent = "";
//     restartButton.style.display = "none"; // Hide the Restart Quiz button
//     topicInput.value = "";
//     topicInputContainer.classList.remove("hidden"); // Show the topic input container
//     quizContainer.classList.add("hidden");
//     // Clear old questions and options
//     questionElement.innerHTML = "";
//     optionsContainer.innerHTML = "";
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     if (topic.trim() !== "" && !hasStarted) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic);
//       quizContainer.classList.remove("hidden");
//       topicInputContainer.classList.add("hidden"); // Hide the topic input container
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     isQuizFinished = true;
//     hideSubmitButton(); // Hide the Submit button after clicking it
//     displayQuestion();
//   });

//   restartButton.addEventListener("click", () => {
//     restartQuiz();
//   });
// });




// Done till here without lifeline
// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const numQuestionsInput = document.getElementById("numQuestions"); // New input field for number of questions
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit");
//   const restartButton = document.getElementById("restart");
//   const topicInputContainer = document.getElementById("topic-input");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;

//   async function fetchQuestionsFromBackend(topic, numQuestions) { // Add numQuestions parameter
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}&numQuestions=${numQuestions}`); // Pass numQuestions to the backend
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none"; // Hide the Submit button
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "blue";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       // Last question reached
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none"; // Hide the Submit button
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block"; // Show the Submit button
//   }

//   function hideSubmitButton() {
//     submitButton.style.display = "none"; // Hide the Submit button
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block"; // Show the Restart Quiz button
//     hideSubmitButton(); // Hide the Submit button when showing the score
//   }

//   function restartQuiz() {
//     hasStarted = false;
//     isQuizFinished = false;
//     questions = [];
//     currentQuestionIndex = 0;
//     score = 0;
//     resultElement.textContent = "";
//     restartButton.style.display = "none"; // Hide the Restart Quiz button
//     topicInput.value = "";
//     numQuestionsInput.value = ""; // Clear the number of questions input field
//     topicInputContainer.classList.remove("hidden"); // Show the topic input container
//     quizContainer.classList.add("hidden");
//     // Clear old questions and options
//     questionElement.innerHTML = "";
//     optionsContainer.innerHTML = "";
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     const numQuestions = parseInt(numQuestionsInput.value);

//     if (topic.trim() !== "" && !hasStarted && numQuestions >= 1 && numQuestions <= 10) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic, numQuestions);
//       quizContainer.classList.remove("hidden");
//       topicInputContainer.classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     isQuizFinished = true;
//     hideSubmitButton(); // Hide the Submit button after clicking it
//     displayQuestion();
//   });

//   restartButton.addEventListener("click", () => {
//     restartQuiz();
//   });
// });



// Lifeline function not working properly

// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const numQuestionsInput = document.getElementById("numQuestions");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit");
//   const restartButton = document.getElementById("restart");
//   const lifelineButton = document.getElementById("lifeline");
//   const topicInputContainer = document.getElementById("topic-input");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;
//   let lifelineUsed = false; // New variable to track if the lifeline is used

//   async function fetchQuestionsFromBackend(topic, numQuestions) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}&numQuestions=${numQuestions}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     lifelineButton.style.display = lifelineUsed ? "none" : "block"; // Show the lifeline button if it is not used
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "blue";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none";
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block";
//   }

//   function hideSubmitButton() {
//     submitButton.style.display = "none";
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block";
//     hideSubmitButton();
//     lifelineButton.style.display = "none"; // Hide the lifeline button when showing the score
//   }

//   function restartQuiz() {
//     hasStarted = false;
//     isQuizFinished = false;
//     lifelineUsed = false; // Reset lifeline usage
//     questions = [];
//     currentQuestionIndex = 0;
//     score = 0;
//     resultElement.textContent = "";
//     restartButton.style.display = "none";
//     topicInput.value = "";
//     numQuestionsInput.value = "";
//     topicInputContainer.classList.remove("hidden");
//     quizContainer.classList.add("hidden");
//     questionElement.innerHTML = "";
//     optionsContainer.innerHTML = "";
//   }

//   async function useLifeline() {
//     lifelineUsed = true;
//     const currentQuestion = questions[currentQuestionIndex];
//     const optionButtons = document.querySelectorAll(".option");
//     const incorrectOptions = [];

//     optionButtons.forEach((optionButton) => {
//       const optionIndex = parseInt(optionButton.dataset.option);
//       if (optionIndex !== currentQuestion.correctAnswerIndex) {
//         incorrectOptions.push(optionButton);
//       }
//     });

//     if (incorrectOptions.length >= 2) {
//       const randomIndex1 = Math.floor(Math.random() * incorrectOptions.length);
//       incorrectOptions[randomIndex1].disabled = true;
//       incorrectOptions.splice(randomIndex1, 1);

//       const randomIndex2 = Math.floor(Math.random() * incorrectOptions.length);
//       incorrectOptions[randomIndex2].disabled = true;
//     }

//     lifelineButton.disabled = true;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     const numQuestions = parseInt(numQuestionsInput.value);

//     if (topic.trim() !== "" && !hasStarted && numQuestions >= 1 && numQuestions <= 10) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic, numQuestions);
//       quizContainer.classList.remove("hidden");
//       topicInputContainer.classList.add("hidden");
//       lifelineButton.style.display = "block"; // Show the lifeline button when the quiz starts
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     isQuizFinished = true;
//     hideSubmitButton();
//     displayQuestion();
//   });

//   restartButton.addEventListener("click", () => {
//     restartQuiz();
//   });

//   lifelineButton.addEventListener("click", () => {
//     useLifeline();
//   });
// });




// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const numQuestionsInput = document.getElementById("numQuestions");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit");
//   const restartButton = document.getElementById("restart");
//   const topicInputContainer = document.getElementById("topic-input");
//   const lifelineButton = document.getElementById("lifeline");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;
//   let lifelineUsed = false;

//   async function fetchQuestionsFromBackend(topic, numQuestions) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}&numQuestions=${numQuestions}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       lifelineUsed = false; // Reset lifeline usage when new questions are fetched
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     lifelineButton.style.display = "block";
//     lifelineButton.disabled = lifelineUsed; // Enable the lifeline button if not used on the current question
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "blue";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       // Last question reached
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none";
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block";
//   }

//   function hideSubmitButton() {
//     submitButton.style.display = "none";
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block";
//     hideSubmitButton();
//     lifelineButton.style.display = "none";
//   }

//   function restartQuiz() {
//     hasStarted = false;
//     isQuizFinished = false;
//     lifelineUsed = false; // Reset lifeline usage when the quiz is restarted
//     restartButton.style.display = "none";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     startButton.style.display = "block";
//     topicInputContainer.classList.remove("hidden");
//     questionElement.innerHTML = "";
//     optionsContainer.innerHTML = "";
//     resultElement.textContent = "";
//   }

//   async function useLifeline() {
//     lifelineUsed = true;
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctAnswerIndex = currentQuestion.correctAnswerIndex;
//     const optionButtons = document.querySelectorAll(".option");
//     let incorrectOptionsRemaining = 2;

//     optionButtons.forEach((button, index) => {
//       if (index + 1 !== correctAnswerIndex && incorrectOptionsRemaining > 0) {
//         button.disabled = true;
//         incorrectOptionsRemaining--;
//       }
//     });

//     lifelineButton.disabled = true;
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     const numQuestions = parseInt(numQuestionsInput.value);

//     if (topic.trim() !== "" && !hasStarted && numQuestions >= 1 && numQuestions <= 10) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic, numQuestions);
//       quizContainer.classList.remove("hidden");
//       topicInputContainer.classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     isQuizFinished = true;
//     hideSubmitButton();
//     displayQuestion();
//   });

//   restartButton.addEventListener("click", () => {
//     restartQuiz();
//   });

//   lifelineButton.addEventListener("click", () => {
//     if (hasStarted && !isQuizFinished && !lifelineUsed) {
//       useLifeline();
//     }
//   });
// });





// index.js untill the options eleminamted by the lifeline becomes grey in colour
// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const numQuestionsInput = document.getElementById("numQuestions");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit");
//   const restartButton = document.getElementById("restart");
//   const topicInputContainer = document.getElementById("topic-input");
//   const lifelineButton = document.getElementById("lifeline");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;
//   let lifelineUsed = false;

//   async function fetchQuestionsFromBackend(topic, numQuestions) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}&numQuestions=${numQuestions}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       lifelineUsed = false; // Reset lifeline usage when new questions are fetched
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     lifelineButton.style.display = "block";
//     lifelineButton.disabled = lifelineUsed; // Enable the lifeline button if not used on the current question
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "#1492FC";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       // Last question reached
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none";
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block";
//   }

//   function hideSubmitButton() {
//     submitButton.style.display = "none";
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block";
//     hideSubmitButton();
//     lifelineButton.style.display = "none";
//   }
  
//     function resetLifelineButton() {
//       lifelineUsed = false;
//       lifelineButton.disabled = false;
//       lifelineButton.classList.remove("eliminated-option");
//     }
  
//     function restartQuiz() {
//       hasStarted = false;
//       isQuizFinished = false;
//       restartButton.style.display = "none";
//       nextButton.style.display = "none";
//       submitButton.style.display = "none";
//       startButton.style.display = "block";
//       topicInputContainer.classList.remove("hidden");
//       questionElement.innerHTML = "";
//       optionsContainer.innerHTML = "";
//       resultElement.textContent = "";
//       resetLifelineButton(); // Reset the lifeline button when the quiz is restarted
//     }  
  
//     async function useLifeline() {
//       lifelineUsed = true;
//       const currentQuestion = questions[currentQuestionIndex];
//       const correctAnswerIndex = currentQuestion.correctAnswerIndex;
//       const optionButtons = document.querySelectorAll(".option");
//       let incorrectOptionsRemaining = 2;
  
//       optionButtons.forEach((button, index) => {
//         if (index + 1 !== correctAnswerIndex && incorrectOptionsRemaining > 0) {
//           button.disabled = true;
//           button.classList.add("eliminated-option"); // Add a CSS class to the eliminated options
//           incorrectOptionsRemaining--;
//         }
//       });
  
//       lifelineButton.disabled = true;
//       lifelineButton.classList.add("eliminated-option"); // Add the CSS class to the lifeline button
//     }
  
    
//       const lifelineButtons = document.getElementById("lifelineButtons");
//       const audiencePollButton = document.getElementById("audiencePoll");
//       const audiencePollResults = document.getElementById("audiencePollResults");
//       const pollChart = document.getElementById("pollChart");
    
//       let audiencePollUsed = false;
    
//       async function useAudiencePoll() {
//         audiencePollUsed = true;
//         const currentQuestion = questions[currentQuestionIndex];
//         const correctAnswerIndex = currentQuestion.correctAnswerIndex;
    
//         const totalVotes = 100;
//         const correctOptionVotes = Math.floor(Math.random() * 70) + 15; // 15% to 84% votes for the correct option
//         const incorrectOptionVotes = (totalVotes - correctOptionVotes) / 3; // Distribute the rest equally to the incorrect options
    
//         const pollData = [
//           { option: 1, votes: incorrectOptionVotes },
//           { option: 2, votes: incorrectOptionVotes },
//           { option: 3, votes: incorrectOptionVotes },
//           { option: 4, votes: correctOptionVotes },
//         ];
    
//         displayPollChart(pollData);
//       }
    
//       function displayPollChart(pollData) {
//         audiencePollResults.classList.remove("hidden");
    
//         const pollOptions = pollData.map(data => data.option);
//         const pollVotes = pollData.map(data => data.votes);
    
//         const chartOptions = {
//           chart: {
//             type: 'column'
//           },
//           title: {
//             text: 'Audience Poll Results'
//           },
//           xAxis: {
//             categories: pollOptions,
//             crosshair: true
//           },
//           yAxis: {
//             min: 0,
//             max: 100,
//             title: {
//               text: 'Votes (%)'
//             }
//           },
//           series: [{
//             name: 'Votes',
//             data: pollVotes
//           }]
//         };
    
//         Highcharts.chart(pollChart, chartOptions);
//       }
    
//       function hidePollResults() {
//         audiencePollResults.classList.add("hidden");
//       }
  


//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     const numQuestions = parseInt(numQuestionsInput.value);

//     if (topic.trim() !== "" && !hasStarted && numQuestions >= 1 && numQuestions <= 10) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic, numQuestions);
//       quizContainer.classList.remove("hidden");
//       topicInputContainer.classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     isQuizFinished = true;
//     hideSubmitButton();
//     displayQuestion();
//   });

//   restartButton.addEventListener("click", () => {
//     restartQuiz();
//   });

//   lifelineButton.addEventListener("click", () => {
//     if (hasStarted && !isQuizFinished && !lifelineUsed) {
//       useLifeline();
//     }
//   });
// });







// Kind of working fine with the audience poll feature, just some minor changes needeed
// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const numQuestionsInput = document.getElementById("numQuestions");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit");
//   const restartButton = document.getElementById("restart");
//   const topicInputContainer = document.getElementById("topic-input");
//   const lifelineButton = document.getElementById("lifeline");
//   const audiencePollButton = document.getElementById("audiencePoll");
//   const audiencePollResults = document.getElementById("audiencePollResults");
//   const pollChart = document.getElementById("pollChart");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;
//   let lifelineUsed = false;
//   let audiencePollUsed = false;

//   async function fetchQuestionsFromBackend(topic, numQuestions) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}&numQuestions=${numQuestions}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       lifelineUsed = false; // Reset lifeline usage when new questions are fetched
//       audiencePollUsed = false; // Reset audience poll usage when new questions are fetched
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     lifelineButton.style.display = "block";
//     lifelineButton.disabled = lifelineUsed; // Enable the lifeline button if not used on the current question
//     audiencePollButton.style.display = lifelineUsed && !audiencePollUsed ? "block" : "none"; // Show audience poll button if lifeline used and audience poll not used
//     audiencePollResults.classList.remove("visible"); // Hide audience poll results on new question
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "#1492FC";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       // Last question reached
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none";
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block";
//   }

//   function hideSubmitButton() {
//     submitButton.style.display = "none";
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block";
//     hideSubmitButton();
//     lifelineButton.style.display = "none";
//     audiencePollButton.style.display = "none";
//     hidePollResults();
//   }

//   function resetLifelineButton() {
//     lifelineUsed = false;
//     lifelineButton.disabled = false;
//     lifelineButton.classList.remove("eliminated-option");
//   }

//   function resetAudiencePollButton() {
//     audiencePollUsed = false;
//     audiencePollButton.disabled = false;
//     audiencePollButton.classList.remove("eliminated-option");
//   }

//   function restartQuiz() {
//     hasStarted = false;
//     isQuizFinished = false;
//     restartButton.style.display = "none";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     startButton.style.display = "block";
//     topicInputContainer.classList.remove("hidden");
//     questionElement.innerHTML = "";
//     optionsContainer.innerHTML = "";
//     resultElement.textContent = "";
//     resetLifelineButton(); // Reset the lifeline button when the quiz is restarted
//     resetAudiencePollButton(); // Reset the audience poll button when the quiz is restarted
//   }

//   async function useLifeline() {
//     lifelineUsed = true;
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctAnswerIndex = currentQuestion.correctAnswerIndex;
//     const optionButtons = document.querySelectorAll(".option");
//     let incorrectOptionsRemaining = 2;

//     optionButtons.forEach((button, index) => {
//       if (index + 1 !== correctAnswerIndex && incorrectOptionsRemaining > 0) {
//         button.disabled = true;
//         button.classList.add("eliminated-option"); // Add a CSS class to the eliminated options
//         incorrectOptionsRemaining--;
//       }
//     });

//     lifelineButton.disabled = true;
//     lifelineButton.classList.add("eliminated-option"); // Add the CSS class to the lifeline button
//     audiencePollButton.style.display = "block"; // Show the audience poll button after using lifeline
//   }

//   async function useAudiencePoll() {
//     audiencePollUsed = true;
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctAnswerIndex = currentQuestion.correctAnswerIndex;

//     const totalVotes = 100;
//     const correctOptionVotes = Math.floor(Math.random() * 70) + 15; // 15% to 84% votes for the correct option
//     const incorrectOptionVotes = (totalVotes - correctOptionVotes) / 3; // Distribute the rest equally to the incorrect options

//     const pollData = [
//       { option: 1, votes: incorrectOptionVotes },
//       { option: 2, votes: incorrectOptionVotes },
//       { option: 3, votes: incorrectOptionVotes },
//       { option: 4, votes: correctOptionVotes },
//     ];

//     displayPollChart(pollData);
//   }

//   function displayPollChart(pollData) {
//     audiencePollResults.classList.add("visible"); // Show audience poll results
//     audiencePollResults.classList.remove("hidden"); // Remove 'hidden' class to show the poll results

//     const pollOptions = pollData.map(data => data.option);
//     const pollVotes = pollData.map(data => data.votes);

//     const chartOptions = {
//       chart: {
//         type: 'column'
//       },
//       title: {
//         text: 'Audience Poll Results'
//       },
//       xAxis: {
//         categories: pollOptions,
//         crosshair: true
//       },
//       yAxis: {
//         min: 0,
//         max: 100,
//         title: {
//           text: 'Votes (%)'
//         }
//       },
//       series: [{
//         name: 'Votes',
//         data: pollVotes
//       }]
//     };

//     Highcharts.chart(pollChart, chartOptions);
//   }

//   function hidePollResults() {
//     audiencePollResults.classList.remove("visible"); // Remove 'visible' class to hide the poll results
//     audiencePollResults.classList.add("hidden"); // Add 'hidden' class to hide the poll results
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value;
//     const numQuestions = parseInt(numQuestionsInput.value);

//     if (topic.trim() !== "" && !hasStarted && numQuestions >= 1 && numQuestions <= 10) {
//       hasStarted = true;
//       fetchQuestionsFromBackend(topic, numQuestions);
//       quizContainer.classList.remove("hidden");
//       topicInputContainer.classList.add("hidden");
//     }
//   });

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     isQuizFinished = true;
//     hideSubmitButton();
//     displayQuestion();
//   });

//   restartButton.addEventListener("click", () => {
//     restartQuiz();
//   });

//   lifelineButton.addEventListener("click", () => {
//     if (hasStarted && !isQuizFinished && !lifelineUsed) {
//       useLifeline();
//     }
//   });

//   audiencePollButton.addEventListener("click", () => {
//     if (hasStarted && !isQuizFinished && !audiencePollUsed) {
//       useAudiencePoll();
//     }
//   });
// });













// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const numQuestionsInput = document.getElementById("numQuestions");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit");
//   const restartButton = document.getElementById("restart");
//   const topicInputContainer = document.getElementById("topic-input");
//   const lifelineButton = document.getElementById("lifeline");
//   const audiencePollButton = document.getElementById("audiencePoll");
//   const audiencePollResults = document.getElementById("audiencePollResults");
//   const pollChart = document.getElementById("pollChart");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;
//   let lifelineUsed = false;
//   let audiencePollUsed = false;

//   async function fetchQuestionsFromBackend(topic, numQuestions) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}&numQuestions=${numQuestions}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       lifelineUsed = false; // Reset lifeline usage when new questions are fetched
//       audiencePollUsed = false; // Reset audience poll usage when new questions are fetched
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     lifelineButton.style.display = lifelineUsed ? "none" : "block"; // Show lifeline button only if it's not used
//     audiencePollButton.style.display = audiencePollUsed ? "none" : "block"; // Show audience poll button only if it's not used
//     resetPollChart();
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "#1492FC";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       // Last question reached
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none";
//     hidePollResults();
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block";
//     hidePollResults();
//   }

//   function hideSubmitButton() {
//     submitButton.style.display = "none";
//   }

//   function hidePollResults() {
//     audiencePollResults.classList.remove("visible"); // Remove 'visible' class to hide the poll results
//     audiencePollResults.classList.add("hidden"); // Add 'hidden' class to hide the poll results
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block";
//     hideSubmitButton();
//     lifelineButton.style.display = "none";
//     audiencePollButton.style.display = "none";
//     hidePollResults();
//   }

//   function resetLifelineButton() {
//     lifelineUsed = false;
//     lifelineButton.disabled = false;
//     lifelineButton.classList.remove("eliminated-option");
//   }

//   function resetAudiencePollButton() {
//     audiencePollUsed = false;
//     audiencePollButton.disabled = false;
//     audiencePollButton.classList.remove("eliminated-option");
//     hidePollResults();
//   }

//   function restartQuiz() {
//     hasStarted = false;
//     isQuizFinished = false;
//     restartButton.style.display = "none";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     startButton.style.display = "block";
//     topicInputContainer.classList.remove("hidden");
//     questionElement.innerHTML = "";
//     optionsContainer.innerHTML = "";
//     resultElement.textContent = "";
//     resetLifelineButton(); // Reset the lifeline button when the quiz is restarted
//     resetAudiencePollButton(); // Reset the audience poll button when the quiz is restarted
//     resetPollChart(); // Hide the audience poll results and chart when the quiz is restarted
//   }

//   async function useLifeline() {
//     if (hasStarted && !isQuizFinished && !lifelineUsed) {
//       lifelineUsed = true;
//       const currentQuestion = questions[currentQuestionIndex];
//       const correctAnswerIndex = currentQuestion.correctAnswerIndex;
//       const optionButtons = document.querySelectorAll(".option");
//       let incorrectOptionsRemaining = 2;

//       optionButtons.forEach((button, index) => {
//         if (index + 1 !== correctAnswerIndex && incorrectOptionsRemaining > 0) {
//           button.disabled = true;
//           button.classList.add("eliminated-option"); // Add a CSS class to the eliminated options
//           incorrectOptionsRemaining--;
//         }
//       });

//       lifelineButton.disabled = true;
//       lifelineButton.classList.add("eliminated-option"); // Add the CSS class to the lifeline button
//     }
//   }


// async function useAudiencePoll() {
//   if (!audiencePollUsed) {
//     audiencePollUsed = true;
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctAnswerIndex = currentQuestion.correctAnswerIndex;

//     const totalVotes = 100;
//     const correctOptionVotes = Math.floor(totalVotes * 0.7); // 70% votes for the correct option
//     const incorrectOptionVotes = Math.floor((totalVotes - correctOptionVotes) / 3); // Distribute the rest equally to the incorrect options

//     const pollData = [
//       { option: 1, votes: incorrectOptionVotes },
//       { option: 2, votes: incorrectOptionVotes },
//       { option: 3, votes: incorrectOptionVotes },
//       { option: 4, votes: incorrectOptionVotes }, // Initialize all options with incorrect votes
//     ];

//     // Set correctOptionVotes to the correct answer option number
//     pollData[correctAnswerIndex - 1].votes = correctOptionVotes;

//     displayPollChart(pollData);
//     audiencePollButton.disabled = true;
//     audiencePollButton.classList.add("eliminated-option"); // Add the CSS class to the audience poll button
//   }
// }


//   function resetPollChart() {
//     audiencePollResults.classList.add("hidden");
//   }

//   function displayPollChart(pollData) {
//     audiencePollResults.classList.remove("hidden");

//     const pollOptions = pollData.map(data => data.option);
//     const pollVotes = pollData.map(data => data.votes);

//     const chartOptions = {
//       chart: {
//         type: 'column'
//       },
//       title: {
//         text: 'Audience Poll Results'
//       },
//       xAxis: {
//         categories: pollOptions,
//         crosshair: true
//       },
//       yAxis: {
//         min: 0,
//         max: 100,
//         title: {
//           text: 'Votes (%)'
//         }
//       },
//       series: [{
//         name: 'Votes',
//         data: pollVotes
//       }]
//     };

//     Highcharts.chart(pollChart, chartOptions);
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value.trim();
//     const numQuestions = parseInt(numQuestionsInput.value);

//     if (topic === "" || isNaN(numQuestions) || numQuestions < 1 || numQuestions > 10) {
//       alert("Please enter a valid topic and number of questions (1-10).");
//     } else {
//       fetchQuestionsFromBackend(topic, numQuestions);
//       hasStarted = true;
//       quizContainer.classList.remove("hidden");
//       startButton.style.display = "none";
//       topicInputContainer.classList.add("hidden");
//     }
//   });

  

//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     hidePollResults();
//     displayQuestion();
//   });

//   submitButton.addEventListener("click", () => {
//     isQuizFinished = true;
//     showScore();
//   });

//   restartButton.addEventListener("click", restartQuiz);

//   lifelineButton.addEventListener("click", useLifeline);
//   audiencePollButton.addEventListener("click", useAudiencePoll);
// });











// document.addEventListener("DOMContentLoaded", () => {
//   const startButton = document.getElementById("start");
//   const quizContainer = document.getElementById("quiz");
//   const topicInput = document.getElementById("topic");
//   const numQuestionsInput = document.getElementById("numQuestions");
//   const questionElement = document.getElementById("question");
//   const optionsContainer = document.getElementById("options");
//   const resultElement = document.getElementById("result");
//   const nextButton = document.getElementById("next");
//   const submitButton = document.getElementById("submit");
//   const restartButton = document.getElementById("restart");
//   const topicInputContainer = document.getElementById("topic-input");
//   const lifelineButton = document.getElementById("lifeline");
//   const audiencePollButton = document.getElementById("audiencePoll");
//   const audiencePollResults = document.getElementById("audiencePollResults");
//   const pollChart = document.getElementById("pollChart");

//   let currentQuestionIndex = 0;
//   let questions = [];
//   let score = 0;
//   let hasStarted = false;
//   let isQuizFinished = false;
//   let lifelineUsed = false;
//   let audiencePollUsed = false;

//   async function fetchQuestionsFromBackend(topic, numQuestions) {
//     try {
//       const response = await fetch(`/api/getQuestions?topic=${topic}&numQuestions=${numQuestions}`);
//       const data = await response.json();
//       questions = data.questions;
//       currentQuestionIndex = 0;
//       score = 0;
//       isQuizFinished = false;
//       lifelineUsed = false;
//       audiencePollUsed = false;
//       displayQuestion();
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   }

//   function displayQuestion() {
//     if (isQuizFinished) {
//       showScore();
//       return;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.classList.add("option");
//       optionButton.textContent = option.replace(/\n/g, "");
//       optionButton.dataset.option = index + 1;

//       optionButton.addEventListener("mouseover", highlightOption);
//       optionButton.addEventListener("mouseout", resetOptionColor);
//       optionButton.addEventListener("click", selectAnswer);

//       optionsContainer.appendChild(optionButton);
//     });

//     resultElement.textContent = "";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     lifelineButton.style.display = lifelineUsed ? "none" : "block";
//     audiencePollButton.style.display = audiencePollUsed ? "none" : "block";
//     resetPollChart();
//   }

//   function highlightOption(event) {
//     event.target.style.backgroundColor = "#1492FC";
//   }

//   function resetOptionColor(event) {
//     event.target.style.backgroundColor = "#fff";
//   }

//   function selectAnswer(event) {
//     if (isQuizFinished) {
//       return;
//     }

//     const selectedOptionIndex = parseInt(event.target.dataset.option);
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

//     if (isCorrect) {
//       event.target.style.backgroundColor = "green";
//       score++;
//       resultElement.textContent = "Correct!";
//     } else {
//       event.target.style.backgroundColor = "red";
//       resultElement.textContent = "Oops! It's the wrong answer.";
//     }

//     event.target.removeEventListener("mouseover", highlightOption);
//     event.target.removeEventListener("mouseout", resetOptionColor);
//     event.target.removeEventListener("click", selectAnswer);

//     const optionButtons = document.querySelectorAll(".option");
//     optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

//     if (currentQuestionIndex === questions.length - 1) {
//       showSubmitButton();
//     } else {
//       showNextButton();
//     }
//   }

//   function showNextButton() {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none";
//     // hidePollResults();
//   }

//   function showSubmitButton() {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block";
//     // hidePollResults();
//   }

//   function hideSubmitButton() {
//     submitButton.style.display = "none";
//   }

//   function hidePollResults() {
//     audiencePollResults.classList.remove("visible");
//     audiencePollResults.classList.add("hidden");
//   }

//   function showScore() {
//     quizContainer.classList.add("hidden");
//     resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
//     restartButton.style.display = "block";
//     hideSubmitButton();
//     lifelineButton.style.display = "none";
//     audiencePollButton.style.display = "none";
//     hidePollResults();
//   }

//   function resetLifelineButton() {
//     lifelineUsed = false;
//     lifelineButton.disabled = false;
//     lifelineButton.classList.remove("eliminated-option");
//   }

//   function resetAudiencePollButton() {
//     audiencePollUsed = false;
//     audiencePollButton.disabled = false;
//     audiencePollButton.classList.remove("eliminated-option");
//     hidePollResults();
//   }

//   function restartQuiz() {
//     hasStarted = false;
//     isQuizFinished = false;
//     restartButton.style.display = "none";
//     nextButton.style.display = "none";
//     submitButton.style.display = "none";
//     startButton.style.display = "block";
//     topicInputContainer.classList.remove("hidden");
//     questionElement.innerHTML = "";
//     optionsContainer.innerHTML = "";
//     resultElement.textContent = "";
//     resetLifelineButton();
//     resetAudiencePollButton();
//     resetPollChart();
//   }

//   async function useLifeline() {
//     if (hasStarted && !isQuizFinished && !lifelineUsed) {
//       lifelineUsed = true;
//       const currentQuestion = questions[currentQuestionIndex];
//       const correctAnswerIndex = currentQuestion.correctAnswerIndex;
//       const optionButtons = document.querySelectorAll(".option");
//       let incorrectOptionsRemaining = 2;

//       optionButtons.forEach((button, index) => {
//         if (index + 1 !== correctAnswerIndex && incorrectOptionsRemaining > 0) {
//           button.disabled = true;
//           button.classList.add("eliminated-option");
//           incorrectOptionsRemaining--;
//         }
//       });

//       lifelineButton.disabled = true;
//       lifelineButton.classList.add("eliminated-option");
//     }
//   }

//   async function useAudiencePoll() {
//     if (!audiencePollUsed) {
//       audiencePollUsed = true;
//       const currentQuestion = questions[currentQuestionIndex];
//       const correctAnswerIndex = currentQuestion.correctAnswerIndex;

//       const totalVotes = 100;
//       const correctOptionVotes = Math.floor(totalVotes * 0.7);
//       const incorrectOptionVotes = Math.floor((totalVotes - correctOptionVotes) / 3);

//       const pollData = [
//         { option: 1, votes: incorrectOptionVotes },
//         { option: 2, votes: incorrectOptionVotes },
//         { option: 3, votes: incorrectOptionVotes },
//         { option: 4, votes: incorrectOptionVotes },
//       ];

//       pollData[correctAnswerIndex - 1].votes = correctOptionVotes;

//       displayPollChart(pollData);
//       audiencePollButton.disabled = true;
//       audiencePollButton.classList.add("eliminated-option");
//     }
//   }

//   function resetPollChart() {
//     audiencePollResults.classList.add("hidden");
//   }

//   function displayPollChart(pollData) {
//     audiencePollResults.classList.remove("hidden");
//     audiencePollResults.classList.add("visible");

//     const pollOptions = pollData.map(data => data.option);
//     const pollVotes = pollData.map(data => data.votes);

//     const chartOptions = {
//       chart: {
//         type: 'column'
//       },
//       title: {
//         text: 'Audience Poll Results'
//       },
//       xAxis: {
//         categories: pollOptions,
//         crosshair: true
//       },
//       yAxis: {
//         min: 0,
//         max: 100,
//         title: {
//           text: 'Votes (%)'
//         }
//       },
//       series: [{
//         name: 'Votes',
//         data: pollVotes
//       }]
//     };

//     Highcharts.chart(pollChart, chartOptions);
//   }

//   startButton.addEventListener("click", () => {
//     const topic = topicInput.value.trim();
//     const numQuestions = parseInt(numQuestionsInput.value);

//     if (topic === "" || isNaN(numQuestions) || numQuestions < 1 || numQuestions > 10) {
//       alert("Please enter a valid topic and number of questions (1-10).");
//     } else {
//       fetchQuestionsFromBackend(topic, numQuestions);
//       hasStarted = true;
//       quizContainer.classList.remove("hidden");
//       startButton.style.display = "none";
//       topicInputContainer.classList.add("hidden");
//     }
//   });

//     nextButton.addEventListener("click", () => {
//       currentQuestionIndex++;
//       // hidePollResults();
//       audiencePollResults.classList.add("hidden");
//       displayQuestion();
//     });
  
//     submitButton.addEventListener("click", () => {
//       isQuizFinished = true;
//       audiencePollResults.classList.add("hidden");
//       showScore();
//     });
  
//     restartButton.addEventListener("click", restartQuiz);
  
//     lifelineButton.addEventListener("click", useLifeline);
//     audiencePollButton.addEventListener("click", useAudiencePoll);
// });





document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start");
  const quizContainer = document.getElementById("quiz");
  const topicInput = document.getElementById("topic");
  const numQuestionsInput = document.getElementById("numQuestions");
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const nextButton = document.getElementById("next");
  const submitButton = document.getElementById("submit");
  const restartButton = document.getElementById("restart");
  const topicInputContainer = document.getElementById("topic-input");
  const lifelineButton = document.getElementById("lifeline");
  const audiencePollButton = document.getElementById("audiencePoll");
  const audiencePollResults = document.getElementById("audiencePollResults");
  const pollChart = document.getElementById("pollChart");

  let currentQuestionIndex = 0;
  let questions = [];
  let score = 0;
  let hasStarted = false;
  let isQuizFinished = false;
  let lifelineUsed = false;
  let audiencePollUsed = false;

  async function fetchQuestionsFromBackend(topic, numQuestions) {
    try {
      const response = await fetch(`/api/getQuestions?topic=${topic}&numQuestions=${numQuestions}`);
      const data = await response.json();
      questions = data.questions;
      currentQuestionIndex = 0;
      score = 0;
      isQuizFinished = false;
      lifelineUsed = false;
      audiencePollUsed = false;
      displayQuestion();
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }

  function displayQuestion() {
    if (isQuizFinished) {
      showScore();
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.classList.add("option");
      optionButton.textContent = option.replace(/\n/g, "");
      optionButton.dataset.option = index + 1;

      optionButton.addEventListener("mouseover", highlightOption);
      optionButton.addEventListener("mouseout", resetOptionColor);
      optionButton.addEventListener("click", selectAnswer);

      optionsContainer.appendChild(optionButton);
    });

    resultElement.textContent = "";
    nextButton.style.display = "none";
    submitButton.style.display = "none";
    lifelineButton.style.display = lifelineUsed ? "none" : "block";
    audiencePollButton.style.display = audiencePollUsed ? "none" : "block";
    resetPollChart();
    hidePollResults();
  }

  function highlightOption(event) {
    event.target.style.backgroundColor = "#1492FC";
  }

  function resetOptionColor(event) {
    event.target.style.backgroundColor = "#fff";
  }

  function selectAnswer(event) {
    if (isQuizFinished) {
      return;
    }

    const selectedOptionIndex = parseInt(event.target.dataset.option);
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswerIndex === selectedOptionIndex;

    if (isCorrect) {
      event.target.style.backgroundColor = "green";
      score++;
      resultElement.textContent = "Correct!";
    } else {
      event.target.style.backgroundColor = "red";
      resultElement.textContent = "Oops! It's the wrong answer.";
    }

    event.target.removeEventListener("mouseover", highlightOption);
    event.target.removeEventListener("mouseout", resetOptionColor);
    event.target.removeEventListener("click", selectAnswer);

    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(button => button.removeEventListener("click", selectAnswer));

    if (currentQuestionIndex === questions.length - 1) {
      showSubmitButton();
    } else {
      showNextButton();
    }
  }

  function showNextButton() {
    nextButton.style.display = "block";
    submitButton.style.display = "none";
    audiencePollResults.classList.remove("visible");
    audiencePollResults.classList.add("hidden");
  }

  function showSubmitButton() {
    nextButton.style.display = "none";
    submitButton.style.display = "block";
    audiencePollResults.classList.remove("visible");
    audiencePollResults.classList.add("hidden");
  }

  function hideSubmitButton() {
    submitButton.style.display = "none";
  }

  function hidePollResults() {
    audiencePollResults.classList.remove("visible");
    audiencePollResults.classList.add("hidden");
  }

  function showScore() {
    quizContainer.classList.add("hidden");
    resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
    restartButton.style.display = "block";
    hideSubmitButton();
    lifelineButton.style.display = "none";
    audiencePollButton.style.display = "none";
    hidePollResults();
  }

  function resetLifelineButton() {
    lifelineUsed = false;
    lifelineButton.disabled = false;
    lifelineButton.classList.remove("eliminated-option");
  }

  function resetAudiencePollButton() {
    audiencePollUsed = false;
    audiencePollButton.disabled = false;
    audiencePollButton.classList.remove("eliminated-option");
    hidePollResults();
  }

  function restartQuiz() {
    hasStarted = false;
    isQuizFinished = false;
    restartButton.style.display = "none";
    nextButton.style.display = "none";
    submitButton.style.display = "none";
    startButton.style.display = "block";
    topicInputContainer.classList.remove("hidden");
    questionElement.innerHTML = "";
    optionsContainer.innerHTML = "";
    resultElement.textContent = "";
    resetLifelineButton();
    resetAudiencePollButton();
    resetPollChart();
  }

  async function useLifeline() {
    if (hasStarted && !isQuizFinished && !lifelineUsed) {
      lifelineUsed = true;
      const currentQuestion = questions[currentQuestionIndex];
      const correctAnswerIndex = currentQuestion.correctAnswerIndex;
      const optionButtons = document.querySelectorAll(".option");
      let incorrectOptionsRemaining = 2;

      optionButtons.forEach((button, index) => {
        if (index + 1 !== correctAnswerIndex && incorrectOptionsRemaining > 0) {
          button.disabled = true;
          button.classList.add("eliminated-option");
          incorrectOptionsRemaining--;
        }
      });

      lifelineButton.disabled = true;
      lifelineButton.classList.add("eliminated-option");
    }
  }

  async function useAudiencePoll() {
    if (!audiencePollUsed) {
      audiencePollUsed = true;
      const currentQuestion = questions[currentQuestionIndex];
      const correctAnswerIndex = currentQuestion.correctAnswerIndex;

      const totalVotes = 100;
      const correctOptionVotes = Math.floor(totalVotes * 0.7);
      const incorrectOptionVotes = Math.floor((totalVotes - correctOptionVotes) / 3);

      const pollData = [
        { option: 1, votes: incorrectOptionVotes },
        { option: 2, votes: incorrectOptionVotes },
        { option: 3, votes: incorrectOptionVotes },
        { option: 4, votes: incorrectOptionVotes },
      ];

      pollData[correctAnswerIndex - 1].votes = correctOptionVotes;

      displayPollChart(pollData);
      audiencePollButton.disabled = true;
      audiencePollButton.classList.add("eliminated-option");
    }
  }

  function resetPollChart() {
    audiencePollResults.classList.add("hidden");
  }

  function displayPollChart(pollData) {
    audiencePollResults.classList.remove("hidden");
    audiencePollResults.classList.add("visible");

    const pollOptions = pollData.map(data => data.option);
    const pollVotes = pollData.map(data => data.votes);

    const chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Audience Poll Results'
      },
      xAxis: {
        categories: pollOptions,
        crosshair: true
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Votes (%)'
        }
      },
      series: [{
        name: 'Votes',
        data: pollVotes
      }]
    };

    Highcharts.chart(pollChart, chartOptions);
  }

  startButton.addEventListener("click", () => {
    const topic = topicInput.value.trim();
    const numQuestions = parseInt(numQuestionsInput.value);

    if (topic === "" || isNaN(numQuestions) || numQuestions < 1 || numQuestions > 10) {
      alert("Please enter a valid topic and number of questions (1-10).");
    } else {
      fetchQuestionsFromBackend(topic, numQuestions);
      hasStarted = true;
      quizContainer.classList.remove("hidden");
      startButton.style.display = "none";
      topicInputContainer.classList.add("hidden");
    }
  });

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    hidePollResults();
    displayQuestion();
  });

  submitButton.addEventListener("click", () => {
    isQuizFinished = true;
    hidePollResults();
    showScore();
  });

  restartButton.addEventListener("click", restartQuiz);

  lifelineButton.addEventListener("click", useLifeline);
  audiencePollButton.addEventListener("click", useAudiencePoll);
});