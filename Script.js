// JavaScript source code
const questions = [
    {
        question: "Which is the largest animinal in the World?",
        answes:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Girrafe", correct: false},



        ]
    },
        {
        question: "Which is the smallest continent in the World?",
        answes:[
            {text: "Asia", correct: false},
            {text: "Europe", correct: false},
            {text: "Africa", correct: false},
            {text: "Australia", correct: true},



        ]
    },
        {
        question: "Which is the largest desert in the World?",
        answes:[
            {text: "Antartica", correct: true},
            {text: "Kalahari", correct: false},
            {text: "Sahara", correct: false},
            {text: "Gobi", correct: false},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo +"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState{
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
        }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";

    if(isCorrect){
        selectedbtn.classList.add("correct");

    }else{
        selectedbtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

startQuiz();