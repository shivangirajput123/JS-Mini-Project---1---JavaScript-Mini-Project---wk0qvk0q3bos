const quizDB = [
    {
        question: "Q: What is the full form of HTML?",
        a: "Hello To My Language",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q:Which of the following tag is used for inserting the largest heading in HTML?",
        a: "head",
        b: "<h1>",
        c: "<h6>",
        d: "heading",
        ans: "ans2"
    },
    {
        question: "Q:What is DOM in HTML?",
        a: "Language dependent application programming",
        b: "Hierarchy of objects in ASP.NET",
        c: "Application programming interface",
        d: "Convention for representing and interacting with objects in html documents",
        ans: "ans4"
    },
    {
        question: "Q:In which part of the HTML metadata is contained?",
        a: "head tag",
        b: "title tag",
        c: "html tag",
        d: "body tag",
        ans: "ans1"
    },
    {
        question: "Q:Which element is used to get highlighted text in HTML5?",
        a: "<u>",
        b: "<mark>",
        c: "<highlight>",
        d: " <b>",
        ans: "ans2"
    },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score =0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsELem) => {
        if(curAnsELem.checked){
            answer = curAnsELem.id;
        }
    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnsELem) => curAnsELem.checked = false );
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        //only following two lines were added
        document.querySelector(".main-div").style.display='none'; //when u complete quiz, it gives none properties to main-div. so your quiz window does not show
        document.querySelector('#showscore_container').style.display="grid"// also it show your showScore container, so your showScore div became visible
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" onclick="location.reload()">Playagain</button>
        `;
        showScore.classList.remove('.scorearea');
        
    }
});
