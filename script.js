// need to establish variables first
// then need to work on the functions and questions that will be displayed
// need to create a working timer
    // need to create a deduction concept to the timer
// need to develop a link between local storage and highscores in html
// need to make event listeners for buttons
// 
// html pieces that need to be used
var highscoresBtn = document.querySelector('#viewhighscoresbtn');
var Timer = document.querySelector('#timer');
var mainTitle = document.querySelector('#title-main');
var Instructions = document.querySelector('#instructions');
var startBtn = document.querySelector('#startbtn');
var answerBtns = document.main.querySelector('ul');
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
        'Which document type is used to give logic to a webpage?',
        'What is the syntax called in javascript that displays a pop up in the browser about an error or notification?',
        'Where are you supposed to reference javascript in the HTML document?',
        'What syntax is used to create text in javascript that displays in the webpage?',
        'What does ! mean in javascript?',
    ],
    answers: [ // answers to the questions above the correct answer is displayed within the array. 
        ['style.css', 'rightanswer:script.jss', 'index.html', 'README.md'],
        ['correctanwer:.alert', '.window', '.confirm', '.document'],
        ['top of the document', 'In the CSS', 'in the javascript', 'correctanswer: at the bottom'],
        ['.script', '.link', 'correctanswer: .text', '.val()'],
        ['stop', 'correctanswer: not', 'go back', 'stop function']
    ]
}

// need to begin the game setup and varibale identification

var timerStart = 100; // sets the beginning timer to 100 sec

// more game variables to help with functions

var questionNumber = 0;
var timerCount = timerBegin;
var score = 0;
var gameOver = true;

// need to begin the functions and setup of the game including the dispaly of the main menu for the game. 

function gameSet() {
    // need to start the timer as well
    timerCount = timerStart;
    mainTitle.textContent = "Coding Quiz: Javascript";
    
    // initial usage of constant variables
    document.querySelector('#submithighscores').style.display = "none";
    document.querySelector('#highscoreinput').style.display = "none";
    
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
    mainTitle.style.display = 'none';
    highscoresBtn.style.display = 'none';
    startBtn.style.display = 'none';
    document.querySelector('#instructions').style.display = 'none';

    // begin with first question
    showQuestions(questionNumber);
    timerStart();

    return;

}

// begin the timer function that countsdown as the user initiate the game
function timerStart() {
    var timeCountInit = setInterval(function () {

    if (gameOver === true) {
        clearInterval(timeCountInit);
        return;
    }       

    if (timerCount < 1) {
        clearInterval(timeCountInit);
        gameOver();
    }

    Timer.textContent = timerStart; // resets timer once game ends and restarts after beginning
    timerStart--; //decrease timer over game 
},  1000); // note: 1000 ms = 1 s 
    return;

}

// need a function to shwo the questions within the pages along with their respective answers and link a click events and create buttons for the answers. 

function showQuestions(startQuestions) {
    mainTitle.textContent = questionsTest.questions[startQuestions];
    createAnswers(startQuestions);

    return;
} //this functions pulls the questions and their respected answers and displays them in created elements for the answers pulling them from the array above. 

// since i am create the elements for the answers, i need to generate a function that knows where to put these new elements

function createAnswers(startQuestions) {

}


