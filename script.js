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
var viewHighscores = document.querySelector('#submithighscores');
var totalScore = document.querySelector('#totalscore');
var highScore = document.querySelector('#highscoreinput');
var userInput = document.querySelector('#name');
var submitBtn = document.querySelector('#submithighscore');
var viewHighEnd = document.querySelector('#viewhighscores');
var gobackBtn = document.querySelector('#goback');
var clearHighScoreBtn = document.querySelector('#clearhighscores');

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

var timerBegin = 100; // sets the beginning timer to 100 sec

// more game variables

