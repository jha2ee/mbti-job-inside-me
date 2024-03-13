import { questions } from './data.js';

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0;
let mbti = '';

function renderQuestion() {
    const question = questions[currentNumber];
    numberEl.innerHTML = question.number;
    questionEl.innerHTML = question.question;
    choice1El.innerHTML = question.choices[0].text;
    choice2El.innerHTML = question.choices[1].text;
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%';
}

function nextQuestion(choiceNumber) {
    if (currentNumber === questions.length - 1) {
        showResultPage();
        return;
    }
    const question = questions[currentNumber];
    mbti = mbti + question.choices[choiceNumber].value;
    //mbti = '' + 'e' or 'i' -> string
    //console.log(mbti);
    currentNumber = currentNumber + 1;
    renderQuestion();
}

function showResultPage() {
    location.href = '/results.html?mbti=' + mbti;    //queryString
}

/* 사용자가 클릭했을 때 이벤트리스너 작성 */
choice1El.addEventListener('click', function() {
    nextQuestion(0);
});
choice2El.addEventListener('click', function() {
    nextQuestion(1);
})

renderQuestion()