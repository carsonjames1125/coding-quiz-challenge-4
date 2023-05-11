// need to establish variables first
// then need to work on the functions and questions that will be displayed
// need to create a working timer
    // need to create a deduction concept to the timer
// need to develop a link between local storage and highscores in html
// need to make event listeners for buttons
// 
// html pieces that need to be used
var highscoresBtn = document.querySelector('#viewhighscoresbtn');
var timerEl = document.getElementById('TIMER');
var mainTitle = document.querySelector('#title-main');
var Instructions = document.querySelector('#instructions');
var startBtn = document.querySelector('#startbtn');
var answerBtns = document.body.querySelector('ul');
var viewHighscores = document.querySelector('#submithighscores');
var totalScore = document.querySelector('#totalscore');
var highScore = document.querySelector('#highscoreinput');
var userInput = document.querySelector('#name');
var submitBtn = document.querySelector('#submithighscore');
var viewHighEnd = document.querySelector('#viewhighscores');
var gobackBtn = document.querySelector('#goback');
var clearHighScoreBtn = document.querySelector('#clearhighscores');
var endBackBtns = document.querySelector('.endBtns');

// generate questions for quiz

var questionsTest = {
    questions: [ //questions for the quix that are to be display in order.
        '1. Which document type is used to give logic to a webpage?',
        '2. What is the syntax called in javascript that displays a pop up in the browser about an error or notification?',
        '3. Where are you supposed to reference javascript in the HTML document?',
        '4. What syntax is used to create text in javascript that displays in the webpage?',
        '5. What does ! mean in javascript?',
    ],
    answers: [ // answers to the questions above the correct answer is displayed within the array. 
        ['style.css', 'rightanswer:script.jss', 'index.html', 'README.md'],
        ['rightanswer:.alert', '.window', '.confirm', '.document'],
        ['top of the document', 'In the CSS', 'in the javascript', 'rightanswer:at the bottom'],
        ['.script', '.link', 'rightanswer:.text', '.val()'],
        ['stop', 'rightanswer:not', 'go back', 'stop function']
    ]
}

// need to begin the game setup and varibale identification

var timeLeft = 100; // sets the beginning timer to 100 sec

// more game variables to help with functions

var questionNumber = 0;
var timerCountdown = timeLeft;
var score = 0;
var gameOver = true;
var answerNumber = 0;
var timerId = setInterval(countdown, 1000);

// need to begin the functions and setup of the game including the dispaly of the main menu for the game. 

function gameMain() {
    // need to start the timer as well
    timerCountdown = timeLeft;
    timerEl.textContent = timeLeft; //forgot to add this so the timer knows what to countdon from
    mainTitle.textContent = "Coding Quiz: Javascript";
    timerEl.textContent = timeLeft;
    timerEl.style.display = 'block', 'justify-content: center;'
    // initial usage of constant variables
    document.querySelector('#submithighscores').style.display = "none";
    document.querySelector('#highscoreinput').style.display = "none";
    answerBtns.style.display = 'none';
    clearHighScoreBtn.style.display = 'none';
    viewHighEnd.style.display = 'none';
    
    
    document.querySelector('.endBtns').style.display = "none";
    // variables that need to be hidden on the main page of the game

    // display styles for the main menu
    mainTitle.style.display = "block";
    document.querySelector('#instructions').style.display = "block";
    highscoresBtn.style.display = "block";
    startBtn.style.display = "block";

    return;
}

// starting of the game

function gameStart() {

    // need to tell the game that the gameOver variable is false so the game knows to begin
    gameOver = false;
    questionNumber = 0;

    // need to hide main menu items when the game starts
    document.querySelector('#submithighscores').style.display = "none";
    document.querySelector('#highscoreinput').style.display = "none";
    highscoresBtn.style.display = 'none';
    startBtn.style.display = 'none';
    document.querySelector('#instructions').style.display = 'none';
    clearHighScoreBtn.style.display = 'none';
    viewHighEnd.style.display = 'none';
    answerBtns.style.display = 'block';
    timerEl.style.display = 'block';


    // begin with first question
    showQuestions(questionNumber);
    countdown();

    return;

}
// begin the timer function that countsdown as the user initiate the game
var timeCountdown = setInterval(countdown, 1000);
function countdown() {
        if (timeLeft = 0) {
            clearInterval(timeCountdown);
            gameOver();
        } else {
            Element.innerHTML = timeLeft + ' seconds remaining';
            timeLeft --;
        } 
    } 

function showQuestions(questionNumber) {
    mainTitle.textContent = questionsTest.questions[questionNumber];
    createAnswersEl(questionNumber);
    return;
} //this functions pulls the questions and their respected answers and displays them in created elements for the answers pulling them from the array above. 

// since i am create the elements for the answers, i need to generate a function that knows where to put these new elements

function createAnswersEl(questionNumber) {
    answerBtns.innerHTML = '';
    
    for (let answerNum = 0; answerNum < questionsTest.answers[questionNumber].length; answerNum++) { // loop function for each answer to display
        var currentAnswerItem = document.createElement('li'); //creating 'li' for answers
        var stringList = questionsTest.answers[questionNumber][answerNum];
        //indicated the created 'li' variables are replacable
        if (questionsTest.answers[questionNumber][answerNum].includes('rightanswer:')){
            stringList = questionsTest.answers[questionNumber][answerNum].substring(12, questionsTest.answers[questionNumber][answerNum].length); //this shows where the string is supposed to start and then take the removed 'rightanswer' from the string and create an html id for it. 
            currentAnswerItem.id = 'rightanswer:';
        }
        currentAnswerItem.textContent = stringList;
        answerBtns.appendChild(currentAnswerItem);
         //creates the "li" elements from the answers array and appends them to the html in the "ul".
    }
        return;
}

// insert function that moves to the next question once an answer is clicked

function nextQuestion() { //if the system runs out of questions that means that the game is over
    questionNumber ++;
    if (questionNumber >= questionsTest.questions.length) {
        gameOver();
    }   else {
        showQuestions(questionNumber); // if the system has more questions then the game must go on to the next question. 

    }
    return;
}

function gameOver() {
    gameOver = true; 
    score = timerCountdown;

    //hide test elements

    timerEl.style.display = 'none';
    answerBtns.style.display = 'none';
    mainTitle.style.display = 'none';
    answerBtns.innerHTML.style.display = 'none';


    totalScore.textContent = score;
    document.querySelector("#submitHighscore").style.display = 'block';
    //document.createElement('<h1>GAME OVER</h1>');

    return;
}

function highScores () {
    if (questionNumber >= questionsTest.questions.length) {
        gameOver();
    } else {
        gameMain();
    }
    return;
}
// click events
function init() {
    startBtn.addEventListener('click', gameStart);
    answerBtns.addEventListener('click', nextQuestion);
    //viewHighEnd.addEventListener('click', localStorage);
    //gobackBtn.addEventListener('click', reload());
    gameMain();
    return;
}


init();
