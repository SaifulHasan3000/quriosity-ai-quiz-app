// const express = require("express");
// const axios = require("axios");
// const { Configuration, OpenAIApi } = require("openai");
// const path = require("path"); // Import the path module

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // Middleware to parse JSON body
// app.use(express.json());

// // Serve the frontend files from the "frontend" folder
// app.use(express.static(path.join(__dirname, "frontend")));

// // API endpoint to get quiz questions for a given topic
// app.get("/api/getQuestions", async (req, res) => {
//   const { topic } = req.query;

//   try {
//     const questions = await generateQuestionsForTopic(topic);
//     res.json({ questions });
//   } catch (error) {
//     console.error("Error fetching questions:", error);
//     res.status(500).json({ error: "Failed to fetch questions." });
//   }
// });

// // API endpoint to evaluate user's answer
// app.post("/api/evaluateAnswer", (req, res) => {
//   const { questionIndex, selectedAnswerIndex } = req.body;
//   const question = quizQuestions[questionIndex];
//   const isCorrect = question.correctAnswerIndex === selectedAnswerIndex;
//   res.json({ isCorrect });
// });

// async function findCorrectAnswerIndex(response) {
//   const correctAnswerIndexRegex = /{(\d)}/;
//   const match = response.match(correctAnswerIndexRegex);
//   if (match) {
//     return parseInt(match[1]);
//   }
//   return -1;
// }

// async function generateQuestionsForTopic(topic) {
//   const prompt = `Give me a random question along with 4 options on the topic - ${topic} and the options should be numbered as 1), 2), 3) and 4) and after giving out this, enclose the correct option number in curly brackets "{}"`;
  
//   try {
//     const completion = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt,
//       max_tokens: 150, // Adjust max_tokens as needed to control the response length
//     });
  
//     const response = completion.data.choices[0].text.trim();
//     const formattedResponse = response.replace(/\n(\w\))/g, "\n$1 ");
//     const options = response.match(/\w\)/g).map(opt => opt.trim());
//     const correctAnswerIndex = await findCorrectAnswerIndex(response);
  
//     const questions = options.map((option, index) => {
//       return {
//         question: formattedResponse,
//         options: options,
//         correctAnswerIndex: correctAnswerIndex
//       };
//     });
  
//     return questions;
//   } catch (error) {
//     console.error("Error generating questions:", error);
//     throw new Error("Failed to generate questions.");
//   }
// }

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });















// const express = require("express");
// const axios = require("axios");
// const { Configuration, OpenAIApi } = require("openai");
// const path = require("path"); // Import the path module

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // Middleware to parse JSON body
// app.use(express.json());

// // API endpoint to get quiz questions for a given topic
// app.get("/api/getQuestions", async (req, res) => {
//   const { topic } = req.query;

//   try {
//     const questions = await generateQuestionsForTopic(topic);
//     res.json({ questions });
//   } catch (error) {
//     console.error("Error fetching questions:", error);
//     res.status(500).json({ error: "Failed to fetch questions." });
//   }
// });

// // API endpoint to evaluate user's answer
// app.post("/api/evaluateAnswer", (req, res) => {
//   const { questionIndex, selectedAnswerIndex } = req.body;
//   const question = quizQuestions[questionIndex];
//   const isCorrect = question.correctAnswerIndex === selectedAnswerIndex;
//   res.json({ isCorrect });
// });

// async function findCorrectAnswerIndex(response) {
//   const correctAnswerIndexRegex = /{(\d)}/;
//   const match = response.match(correctAnswerIndexRegex);
//   if (match) {
//     return parseInt(match[1]);
//   }
//   return -1;
// }

// async function generateQuestionsForTopic(topic) {
//   const prompt = `Give me a random question along with 4 options on the topic - ${topic} and the options should be numbered as 1), 2), 3) and 4) and after giving out this, enclose the correct option number in curly brackets "{}"`;
  
//   try {
//     const completion = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt,
//       max_tokens: 150, // Adjust max_tokens as needed to control the response length
//     });
  
//     const response = completion.data.choices[0].text.trim();
//     const formattedResponse = response.replace(/\n(\w\))/g, "\n$1 ");
//     const options = response.match(/\w\)/g).map(opt => opt.trim());
//     const correctAnswerIndex = await findCorrectAnswerIndex(response);
  
//     const questions = options.map((option, index) => {
//       return {
//         question: formattedResponse,
//         options: options,
//         correctAnswerIndex: correctAnswerIndex
//       };
//     });
  
//     return questions;
//   } catch (error) {
//     console.error("Error generating questions:", error);
//     throw new Error("Failed to generate questions.");
//   }
// }

// // Serve the frontend files from the "frontend" folder
// app.use(express.static(path.join(__dirname, "frontend")));

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



// ABLE TO GENERATE 5 QUESTIONS ON A TOPIC AND DISPLAY THEM ONE BY ONE TO BE ATTEMPTED BY USER
// const express = require("express");
// const axios = require("axios");
// const { Configuration, OpenAIApi } = require("openai");
// const path = require("path"); // Import the path module

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // Middleware to parse JSON body
// app.use(express.json());

// // API endpoint to get quiz questions for a given topic
// app.get("/api/getQuestions", async (req, res) => {
//   const { topic } = req.query;

//   try {
//     const questions = await generateQuestionsForTopic(topic);
//     res.json({ questions });
//   } catch (error) {
//     console.error("Error fetching questions:", error);
//     res.status(500).json({ error: "Failed to fetch questions." });
//   }
// });

// // API endpoint to evaluate user's answer
// app.post("/api/evaluateAnswer", (req, res) => {
//   const { questionIndex, selectedAnswerIndex } = req.body;
//   const question = quizQuestions[questionIndex];
//   const isCorrect = question.correctAnswerIndex === selectedAnswerIndex;
//   res.json({ isCorrect });
// });

// async function findCorrectAnswerIndex(response) {
//   const correctAnswerIndexRegex = /{(\d)}/;
//   const match = response.match(correctAnswerIndexRegex);
//   if (match) {
//     return parseInt(match[1]);
//   }
//   return -1;
// }

// // async function generateQuestionsForTopic(topic) {
// //   const prompt = `Give me a random question along with 4 options on the topic - ${topic} and the options should be numbered as 1), 2), 3) and 4) and after giving out this, enclose the correct option number in curly brackets "{}"`;
  
// //   try {
// //     const completion = await openai.createCompletion({
// //       model: "text-davinci-003",
// //       prompt,
// //       max_tokens: 150, // Adjust max_tokens as needed to control the response length
// //     });
  
// //     const response = completion.data.choices[0].text.trim();
// //     const formattedResponse = response.replace(/\n(\w\))/g, "\n$1 ");
// //     const options = response.match(/\w\)/g).map(opt => opt.trim());
// //     const correctAnswerIndex = await findCorrectAnswerIndex(response);
  
// //     const questions = options.map((option, index) => {
// //       return {
// //         question: formattedResponse,
// //         options: options,
// //         correctAnswerIndex: correctAnswerIndex
// //       };
// //     });
  
// //     return questions;
// //   } catch (error) {
// //     console.error("Error generating questions:", error);
// //     throw new Error("Failed to generate questions.");
// //   }
// // }

// // Serve the frontend files from the "frontend" folder


// async function generateQuestionsForTopic(topic) {
//   const prompt = `Give me a random question along with 4 options on the topic - ${topic} and the options should be numbered as 1), 2), 3) and 4) and after giving out this, enclose the correct option number in curly brackets "{}"`;
  
//   try {
//     const questions = [];

//     for (let i = 0; i < 5; i++) {
//       const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt,
//         max_tokens: 150, // Adjust max_tokens as needed to control the response length
//       });
  
//       const response = completion.data.choices[0].text.trim();
//       const formattedResponse = response.replace(/\n(\w\))/g, "\n$1 ");
//       const options = response.match(/\w\)/g).map(opt => opt.trim());
//       const correctAnswerIndex = await findCorrectAnswerIndex(response);
  
//       const question = {
//         question: formattedResponse,
//         options: options,
//         correctAnswerIndex: correctAnswerIndex
//       };
  
//       questions.push(question);
//     }

//     return questions;
//   } catch (error) {
//     console.error("Error generating questions:", error);
//     throw new Error("Failed to generate questions.");
//   }
// }


// app.use(express.static(path.join(__dirname, "frontend")));

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




// WAS WORKING FINE, ALONG WITH GIVING A CHANCE TO RESTART THE QUIZ AGAIN WITH A NEW TOPIC 
// const express = require("express");
// const axios = require("axios");
// const { Configuration, OpenAIApi } = require("openai");
// const path = require("path"); // Import the path module

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // Middleware to parse JSON body
// app.use(express.json());

// // API endpoint to get quiz questions for a given topic
// app.get("/api/getQuestions", async (req, res) => {
//   const { topic } = req.query;

//   try {
//     const questions = await generateQuestionsForTopic(topic);
//     res.json({ questions });
//   } catch (error) {
//     console.error("Error fetching questions:", error);
//     res.status(500).json({ error: "Failed to fetch questions." });
//   }
// });

// // API endpoint to evaluate user's answer
// app.post("/api/evaluateAnswer", (req, res) => {
//   const { questionIndex, selectedAnswerIndex } = req.body;
//   const question = quizQuestions[questionIndex];
//   const isCorrect = question.correctAnswerIndex === selectedAnswerIndex;
//   res.json({ isCorrect });
// });

// async function findCorrectAnswerIndex(response) {
//   const correctAnswerIndexRegex = /{(\d)}/;
//   const match = response.match(correctAnswerIndexRegex);
//   if (match) {
//     return parseInt(match[1]);
//   }
//   return -1;
// }

// async function generateQuestionsForTopic(topic) {
//   const prompt = `Give me a random question along with 4 options on the topic - ${topic} and the options should be numbered as 1), 2), 3) and 4) and after giving out this, enclose the correct option number in curly brackets "{}"`;
  
//   try {
//     const questions = [];

//     for (let i = 0; i < 3; i++) {
//       const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt,
//         max_tokens: 150, // Adjust max_tokens as needed to control the response length
//       });
  
//       const response = completion.data.choices[0].text.trim();
//       const formattedResponse = response.replace(/\n(\w\))/g, "\n$1 ");
//       const options = response.match(/\w\)/g).map(opt => opt.trim());
//       const correctAnswerIndex = await findCorrectAnswerIndex(response);
  
//       const question = {
//         question: formattedResponse.replace(/\s*{\d}\s*$/, ""), // Remove {number} from the end of the question
//         options: options,
//         correctAnswerIndex: correctAnswerIndex
//       };
  
//       questions.push(question);
//     }

//     return questions;
//   } catch (error) {
//     console.error("Error generating questions:", error);
//     throw new Error("Failed to generate questions.");
//   }
// }



// app.use(express.static(path.join(__dirname, "frontend")));

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



// Done till here without lifeline
// const express = require("express");
// const axios = require("axios");
// const { Configuration, OpenAIApi } = require("openai");
// const path = require("path"); // Import the path module

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // Middleware to parse JSON body
// app.use(express.json());

// // API endpoint to get quiz questions for a given topic
// app.get("/api/getQuestions", async (req, res) => {
//   const { topic, numQuestions } = req.query; // Retrieve numQuestions from query parameters

//   try {
//     const questions = await generateQuestionsForTopic(topic, numQuestions); // Pass numQuestions to the function
//     res.json({ questions });
//   } catch (error) {
//     console.error("Error fetching questions:", error);
//     res.status(500).json({ error: "Failed to fetch questions." });
//   }
// });

// // API endpoint to evaluate user's answer
// app.post("/api/evaluateAnswer", (req, res) => {
//   const { questionIndex, selectedAnswerIndex } = req.body;
//   const question = quizQuestions[questionIndex];
//   const isCorrect = question.correctAnswerIndex === selectedAnswerIndex;
//   res.json({ isCorrect });
// });

// async function findCorrectAnswerIndex(response) {
//   const correctAnswerIndexRegex = /{(\d)}/;
//   const match = response.match(correctAnswerIndexRegex);
//   if (match) {
//     return parseInt(match[1]);
//   }
//   return -1;
// }

// async function generateQuestionsForTopic(topic, numQuestions) { // Add numQuestions parameter
//   const prompt = `Give me a random question along with 4 options on the topic - ${topic}
//   Formatting rules to be strictly followed:
//   only question statement should be there on the first line. No need to respond "Question:" and then respond with the actual statement, rather just give the actual question statement only here
//   the options should be numbered as 1), 2), 3) and 4)
//   and after giving out this, enclose the correct option number in curly brackets "{}" (example for this: if the correct option number is 4 then {4} should be there in your response at the end and NOTHING ELSE).
//   Just return these things and no extra characters or words.`;
  
//   try {
//     const questions = [];

//     for (let i = 0; i < numQuestions; i++) { // Loop for the requested number of questions
//       const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt,
//         max_tokens: 150, // Adjust max_tokens as needed to control the response length
//       });
  
//       const response = completion.data.choices[0].text.trim();
//       const formattedResponse = response.replace(/\n(\w\))/g, "\n$1 ");
//       const options = response.match(/\w\)/g).map(opt => opt.trim());
//       const correctAnswerIndex = await findCorrectAnswerIndex(response);
  
//       const question = {
//         question: formattedResponse.replace(/\s*{\d}\s*$/, ""), // Remove {number} from the end of the question
//         options: options,
//         correctAnswerIndex: correctAnswerIndex
//       };
  
//       questions.push(question);
//     }

//     return questions;
//   } catch (error) {
//     console.error("Error generating questions:", error);
//     throw new Error("Failed to generate questions.");
//   }
// }

// app.use(express.static(path.join(__dirname, "frontend")));

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



const express = require("express");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const path = require("path");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());

app.get("/api/getQuestions", async (req, res) => {
  const { topic, numQuestions } = req.query;

  try {
    const questions = await generateQuestionsForTopic(topic, numQuestions);
    res.json({ questions });
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ error: "Failed to fetch questions." });
  }
});

app.post("/api/evaluateAnswer", (req, res) => {
  const { questionIndex, selectedAnswerIndex } = req.body;
  const question = quizQuestions[questionIndex];
  const isCorrect = question.correctAnswerIndex === selectedAnswerIndex;
  res.json({ isCorrect });
});

async function findCorrectAnswerIndex(response) {
  const correctAnswerIndexRegex = /{(\d)}/;
  const match = response.match(correctAnswerIndexRegex);
  if (match) {
    return parseInt(match[1]);
  }
  return -1;
}

async function generateQuestionsForTopic(topic, numQuestions) {
  const prompt = `Give me a random question along with 4 options on the topic - ${topic}
  Formatting rules to be strictly followed:
  only question statement should be there on the first line. No need to respond "Question:" and then respond with the actual statement, rather just give the actual question statement only here
  the options should be numbered as 1), 2), 3) and 4)
  The options should be given ou in separate lines
  and after giving out this, enclose the correct option number in curly brackets "{}" (example for this: if the correct option number is 4 then {4} should be there in your response at the end and NOTHING ELSE).
  Just return these things and no extra characters or words.`;
  
  try {
    const questions = [];

    for (let i = 0; i < numQuestions; i++) {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 150,
      });
  
      const response = completion.data.choices[0].text.trim();
      const formattedResponse = response.replace(/\n(\w\))/g, "\n$1 ");
      const options = response.match(/\w\)/g).map(opt => opt.trim());
      const correctAnswerIndex = await findCorrectAnswerIndex(response);
  
      const question = {
        question: formattedResponse.replace(/\s*{\d}\s*$/, ""),
        options: options,
        correctAnswerIndex: correctAnswerIndex
      };
  
      questions.push(question);
    }

    return questions;
  } catch (error) {
    console.error("Error generating questions:", error);
    throw new Error("Failed to generate questions.");
  }
}

app.use(express.static(path.join(__dirname, "frontend")));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
