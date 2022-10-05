const read = require('readline-sync')

const title = "JavaScript Quiz"
console.log(title);

let userName = read.question('Please enter your name:\t');
console.log(`Welcome to the quiz, ${userName}`);
separator()

function separator() {
  console.log('======================================================================')
}

function displayInstructions() {
  console.log(`INSTRUCTIONS:
1. There are 5 questions in the quiz to test your basic JavaScript knowledge.
2. For each correct answer you will gain 2 points.
3. For each incorrect answer you will lose 1 point.
4. Correct answer for every question will be displayed after your attempt.\n`);
}

const questionBank = [
  {
    question: `Inside which HTML element do we put the JavaScript?
    a. <javascript>
    b. <js>
    c. <script>
    d. <src>\n`,
    option: 'c',
    answer: 'c. <script>',
  },
  {
    question: `Where is the correct place to insert JavaScript?
    a. The head section
    b. Both the head section and the body section are correct
    c. The body section
    d. None of the above\n`,
    option: 'b',
    answer: 'b. Both the head section and the body section are correct',
  },
  {
    question: `Is a variable named 'apple' same as 'Apple' in JavaScript?
    a. No
    b. Yes
    c. Only when you use 'strict'
    d. None of the above\n`,
    option: 'a',
    answer: 'a. No',
  },
  {
    question: `Which data structure is used to maintain a key-value pair in javascript
    a. Set
    b. Map
    c. Array
    d. String\n`,
    option: 'b',
    answer: 'b. Map',
  },
  {
    question: `The advantages of using strict mode in javascript are:
    a. Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
    b. It disables features that are confusing or poorly thought out.
    c. Strict mode makes it easier to write “secure” JavaScript.
    d. All of the above\n`,
    option: 'd',
    answer: 'd. All of the above',
  },
];

let userScore = 0;

let highScores = [
  {
    name: 'Madhusudan(Me)',
    score: 10,
  },
  {
    name: 'FriendOne',
    score: 10,
  },
  {
    name: 'FriendTwo',
    score: 7,
  },
];

function evaluateQuiz(question, option, answer) {
  let userAnswer = read.question(question);
  if (userAnswer.toLowerCase() === option) {
    console.log(`Correct Answer 😃`);
    userScore += 2;
  } else {
    console.log(`Incorrect Answer ☹️`);
    console.log(`The correct answer is: ${answer}`);
    userScore -= 1;
  }
  separator()
}


// display questions and accept answers
function game() {
  separator()
  for (let i in questionBank) {
    let currentQuestion = questionBank[i];
    evaluateQuiz(
      currentQuestion.question,
      currentQuestion.option,
      currentQuestion.answer
    );
  }
}

function showScores() {
  console.log(`Score Board:`);
  console.log(`\n${userName} scored ${userScore} points.`);
  let highScorer =
    userScore >= 7 ? `Congrats! ${userName} You are a high scorer!\n` : `\n`;
  console.log(highScorer);
  highScores.map((user) =>
    console.log(`${user.name} scored ${user.score} points.`)
  );
}

function startQuiz() {
  const start = read
    .question('Are you ready for the challenge? (Y/N)\t')
    .toLowerCase();
  if (start === 'n') {
    console.log('Come back when you are ready!\n');
  } else {
    console.log("Then let's get started!\n");
    displayInstructions();
    game();
    showScores();
  }
}

startQuiz()