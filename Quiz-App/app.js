const quizData = [{
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following is NOT a valid JavaScript data type?",
        options: ["Number", "String", "Boolean", "Float"],
        correctAnswer: "Float"
    },
    {
        question: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
        options: ["To retrieve a DOM element by its class name", "To retrieve a DOM element by its tag name", "To retrieve a DOM element by its id", "To retrieve a DOM element by its attribute"],
        correctAnswer: "To retrieve a DOM element by its id"
    },
    {
        question: "What does the 'C' in CSS stand for?",
        options: ["Cascading", "Creative", "Colorful", "Content"],
        correctAnswer: "Cascading"
    },
    {
        question: "What is the purpose of the 'box-sizing' CSS property?",
        options: ["To specify the margin of an element", "To include padding and border in the element's total width and height", "To set the background color of an element", "To align elements horizontally"],
        correctAnswer: "To include padding and border in the element's total width and height"
    },
    {
        question: "What method is used to add a new item to the end of an array in JavaScript?",
        options: ["push()", "append()", "addToEnd()", "insert()"],
        correctAnswer: "push()"
    },
    {
        question: "Which of the following is NOT a valid value for the 'display' property in CSS?",
        options: ["block", "inline", "grid", "position"],
        correctAnswer: "position"
    }
];

const quiz = document.querySelector('#quiz')
const submit = document.querySelector('#submit')
const quiz_list = document.querySelector('#quiz_list')
const question_title = document.querySelector('.question_title')
const scoreDiv = document.querySelector('#score')
const result = document.querySelector('#result')
const play_again = document.querySelector('#play_again')
scoreDiv.style.display = 'none'

let score = 0;
let index = 0

const RenderQuestions = (index) => {
    // Clear previous options
    quiz_list.innerHTML = '';

    // Render the current question
    question_title.textContent = quizData[index].question;

    // Render the options
    quizData[index].options.forEach((option, idx) => {
        quiz_list.innerHTML += `
            <li>
                <input type="radio" name="answer" id="option${idx}" value="${option}">
                <label for="option${idx}">${option}</label>
            </li>
        `;
    });
};

RenderQuestions(index)

const Submit = () => {

    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please select an option!");
        return
    }

    if (selectedOption.value === quizData[index].correctAnswer) {
        score += 10
    }

    index++;

    if (index < quizData.length) {
        RenderQuestions(index);
    } else {
        result.innerHTML = ` Your score is ${score}`
        scoreDiv.style.display = 'flex'
        quiz.style.display = 'none'
    }
}

const PlayAgain = () => {
    index = 0
    score = 0
    RenderQuestions(index)
    scoreDiv.style.display = 'none'
    quiz.style.display = 'block'
}

play_again.addEventListener('click', PlayAgain)
submit.addEventListener('click', Submit)