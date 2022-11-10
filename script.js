const quizData = [
    {
        question: 'How Many Rings Does Lebron Have ?',
        a: '6',
        b: '4',
        c: '3',
        d: '5',
        correct: 'b'
    },
    {
        question: 'Which Player has the most rings ?',
        a: 'Michael Jordan',
        b: 'Magic Johnson',
        c: 'Bill Russel',
        d: 'Wilt Chamberlin',
        correct: 'c'
    },
    {
        question:  'Who won the NBA Finals in 2016 ?',
        a: 'Spurs',
        b: 'Cavs',
        c: 'Warriors',
        d: 'Lakers',
        correct: 'b',
    },
    {
        question: 'Which Team has the most NBA Championships',
        a: 'Miami Heat',
        b: 'Atlanta Hawks',
        c: 'Boston Celtics',
        d: 'Los Angeles Lakers',
        correct: 'c',
    },
    {
        question: 'Does the Orlanda Magic have a  NBA Championships',
        a: 'Yes',
        b: 'No',
        c: null,
        d: null,
        correct: 'b',
    },
    {
        question: 'What team did Dwight Howard play for',
        a: 'Kings',
        b: 'Jazz',
        c: 'Rockets',
        d: 'Pacers',
        correct: 'c',
    },
    {
        question: 'What was Seattle former NBA team called ',
        a: 'Thunder',
        b: 'Flashes',
        c: 'Super Sonics',
        d: 'Raiders',
        correct: 'c',
    },
    {
        question: 'Which Big Man has the most Triple Doubles In NBA history',
        a: 'Nikola Jokic',
        b: 'Wilt Chamberlin',
        c: 'Kareem Abdul-Jabbar',
        d: 'Moses Malone',
        correct: 'a',
    },
    {
        question: 'How Many MVP awards do Lebron Have',
        a: '2',
        b: '3',
        c: '4',
        d: '1',
        correct: 'c',
    },
    {
        question: 'Which Player Won More than 3 rings',
        a: 'Dennis Rodman',
        b: 'Bill Russel',
        c: 'Draymond Green',
        d: 'All The Above',
        correct: 'd',
    }
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let Right = 0;
let Wrong = 0;
let percent = 0;
let answer = undefined;
let outcome = null
const user = window.prompt("Welcome to the nba quiz! Let's see how much you know your basketball! Enter You're name Down Below!")

loadQuiz();


function loadQuiz() {
    deselectAnswers();
    current = document.getElementById("current").innerHTML = (`${currentQuiz} / 10`);

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;



}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
        
    });
     return answer;
}
function deselectAnswers() {
     answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            Right++
        }
        else{
          Wrong++;

        }
        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        }
        else{
            Math.floor(percent += (Right/currentQuiz)*100);
            if (percent > 69)

             outcome = ('Passed 🎉');

            else{
            outcome = ('Failed 😓');
            }
            quiz.innerHTML = `<h2> ${user} you ${outcome}. You got a ${percent}%</h2> <h2> You Got ${Right} Correct ✅ and ${Wrong} Incorrect ❌ </h2>`
        }
        }
});