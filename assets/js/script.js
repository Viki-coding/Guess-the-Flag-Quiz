//Select elements
const counterSpan = document.querySelector('.counter span');
const divFlagImg = document.querySelector ('flag-img');
const flagImg = document.querySelector ('.flag-img img');
const options = document.querySelector ('.options ul');
const flagList = document.querySelectorAll('.options ul li');

/** Add function to retrieve questions from our questions.json file */
function retrieveQuestions() {
    let questionRequest = new XMLHttpRequest();
    questionRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            //number of questions per game
            let qCount = 10;
            questionNumber(qCount);
        }
    }
    questionRequest.open("GET", "js/questions.json", true);
    questionRequest.send();
    questionNumber(7) // 
}

retrieveQuestions();

function questionNumber(num) {
    counterSpan.innerHTML = num;
}