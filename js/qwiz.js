const quiz = [
    {
        title: 'what is Mari gras?',
        answers: [
            'its holiday',
            'its tradition',
            'its tradition3',
            'its tradition4'
        ],
        correctAnswer: 2
    },
    {
        title: 'Who is Fucking Alice?',
        answers: [
            'its holiday',
            'its tradition',
            'its tradition3',
            'its tradition4'
        ],
        correctAnswer: 1
    },

];

function buildQuestion(title, answers){
    const container = document.createElement('div');
    const title = document.createElement('span');
    container.innerHTML = 'this is container';
    document.body.appendChild(container);
    /* document.getElementById('content').appendChild(container); */
    container.appendChild(title);
    

    let answer;
    answers.forEach((item) => {
        answer = document.createElement('span');
        answer.innerText = item;
        container.appendChild(answer);
        
    })
    return container;
}
buildQuestion();







/* function displayQuiz(){
    const trivia = document.getElementById('trivia');
    const html =buildQuestion();
    trivia.innerHTML = html;
}
displayQuiz(); */



//----------------------
/* function getQuiz(){
    let html = '';
    let color = '';

    quiz.forEach(ask=>{
        
       html+=
       `<div class="trivia">
        <ul>${ask.title}</ul>
        <li class="yes no">${ask.answer1}</li>
        <li class="yes no">${ask.answer2}</li>
        <li>${ask.answer3}</li>
        <li>${ask.answer4}</li>


    </div>`; 
    })
    return html
}
function displayQuiz(){
    const trivia = document.getElementById('trivia');
    const html = getQuiz();
    trivia.innerHTML = html;
}
displayQuiz(); */