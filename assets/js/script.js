//Select elements
const counterSpan = document.querySelector('.counter span');
const divFlagImg = document.querySelector ('flag-img');
const flagImg = document.querySelector ('.flag-img img');
const options = document.querySelector ('.options ul');
const flagList = document.querySelectorAll('.options ul li');

let currentIndex = 0;

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

/** Add function to count number of questions and insert in counter span */
function questionNumber(num) {
    counterSpan.innerHTML = num;
}

/** Function to populate flag images and questions options */
function addQuestionInfo(obj, count) {
    if(currentIndex < counter){
        flagImg.src=`img/${obj.img}`;
        //Create options
        flagList.forEach((li, i)=>{
        //give each li a dynamic id
        li.id = `answer_${i+1}`;
        //create dynamic data attribute for each li
        li.dataset.answer=obj[`option`][i];
        //insert the option in the li
        li.innerHTML = obj[`option`];
        })
    }
}