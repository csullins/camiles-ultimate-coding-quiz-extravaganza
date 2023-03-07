let container = document.querySelector('.container');
let header = document.querySelector('#header');
let cards = document.querySelector('#cards');
let seconds = document.querySelector('.seconds');
const clickStart = $('.start');
let choicesElement = document.querySelector('#choices');
let questionElement = document.querySelector('#question');
let currentQuestionIndex = 0;
let currentScore = 0;
let timeLeft = 30;
let timerRunning = false;
let form = document.querySelector('form');
let user = document.querySelector('.user');
let highScore = document.querySelector('.highScore');

//On initial load, only the header is visible on the page. When user clicks on START, this function hides the header and displays the cards with questions and answers. Then starts the timer function, and begins displaying the questions. 
clickStart.on('click', function() {
    header.style.display = 'none';
    cards.style.display = 'flex';
    question.style.display = 'flex';
    choicesElement.style.display = 'flex'
    startTimer();
    displayQuestion(questions[0]);
    });

function startTimer() {
    timerRunning = true;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        console.log('Timer has started.');
    if (!timerRunning) {
        clearInterval(timeInterval);
        }
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 0) {
        seconds.textContent = timeLeft + 's';
        // Decrement `timeLeft` by 1
        timeLeft--;
      }  
      else {
        // Once `timeLeft` gets to 0, set `seconds` to an empty string
        seconds.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        displayResults();
      }
      if (timeLeft < 6) {
        $('.seconds').css({'background-color':'yellow'});
      }
    }, 1000);
  };
// The six multiple choice questions are below.
const questions = [
      {
          question: 'How do you declare a variable in JavaScript?',
          answers: ['Using the keyword "const"', 'Using the keyword "var"', 'Using the keyword "let"', 'All of the above'],
          correctAnswer: 3 // Index of the correct answer in the answers array
        },
        {
            question: 'What is the purpose of the <head> tag in HTML?',
            answers: ['To define the main content of the page', 'To define the navigation links on the page', 'To define the footer of the page', 'To contain the metadata of the page, such as the title and description'],
            correctAnswer: 3
        },
        {
            question: 'What is an array in JavaScript?',
            answers: ['A type of function', 'A value that can be changed or assigned a new value', 'A collection of data', 'A type of loop'],
            correctAnswer: 2
        },
        {
            question: 'What is the CSS syntax to change text color to blue?',
            answers: ['text-color: blue', 'fontcolor=blue', 'font-color: blue', 'color: blue'],
            correctAnswer: 3
        },
        {
            question: 'What is the purpose of the <img> tag in HTML?',
            answers: ['To display an image on the page', 'To add a hyperlink to the page', 'To display a video on the page', 'To add a button to the page'],
            correctAnswer: 0
        },
    ];
    // This code qill begin displaying questions, one at a time from the questions object
function displayQuestion(question) {
    console.log('Questions are displaying.');
//when called, a newQuestion variable will serve to create the p tag where the question will display from the questions object
    let newQuestion = document.createElement('p');
    newQuestion.textContent = question.question;
    questionElement.appendChild(newQuestion);
//this code uses the 'forEach' method to loop through the array of answers on each object item (question) and create a div, 
    let answersElement = document.createElement('div');
    question.answers.forEach((answer, index) => {
    const answerButton = document.createElement('button');
//then creates a button with each answer choice in the textcontent
    answerButton.textContent = answer;
//when an answer choice is clicked on
    answerButton.addEventListener('click', () => {
        //if it matches the correctAnswer (dicated from the questions object property...)
        if (index === question.correctAnswer) {
            // then add to currentScore if answer is correct
            currentScore++
        //if the user chose an incorrect answer, 5 seconds subtracts from the timer
        } else {
            timeLeft -= 5;
        }
//display the next question
        currentQuestionIndex++;
// as long as the user still has questions to loop through, continue displaying the next question via the displayQuestion func.
        if (currentQuestionIndex < questions.length) {
            const nextQuestion = questions[currentQuestionIndex];
            questionElement.innerHTML = '';
            displayQuestion(nextQuestion);
        } else {
            displayResults();
        }
    });
        answersElement.appendChild(answerButton);
    });
   // this overwrites the answer choices each time to correspond with the question 
    choicesElement.innerHTML = '';
    choicesElement.appendChild(answersElement);
    }

    function displayResults() {
        // clear out the question and answer sections and 
        questionElement.innerHTML = '';
        choicesElement.innerHTML = '';
        let score = currentScore;
// in the results section, card1, display the phrase below with the user's score
        const resultsElement = document.querySelector('.card1');
        $('.card1').css({'color':'rgb(255, 242, 0)' ,'font-size': '13px'});
        resultsElement.innerHTML = `You answered ${score} out of ${questions.length} correctly!`;
        //highScore.innerHTML = timeLeft;
        form.style.display = 'flex';

    };
    loadLastScore();

    function submitForm(event) {

        let initials = document.querySelector('#initials').value;
        let score = localStorage.getItem("highScore");
        
        if (!score) {
            score = 0;
        }
        
        if (score > (timeLeft + 1))
        return;
        
        localStorage.setItem("initials", initials);
        localStorage.setItem("highScore", (timeLeft + 1));

      console.log(timeLeft);

    }
// This store the initials and score...
    function loadLastScore() {
       let initials = localStorage.getItem("initials");
       let score = localStorage.getItem("highScore");
    //only if it is not present
       if (!initials || !score) {
          return;
        }
// display the initials and score in the nav sections with classes 'user' and 'highScore'
        user.innerHTML = initials;
        highScore.innerHTML = score;
      }