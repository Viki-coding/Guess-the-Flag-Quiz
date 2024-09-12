//Select elements
const counterSpan = document.querySelector('.counter span');
const divFlagImg = document.querySelector ('.flag-img');
const flagImg = document.querySelector ('.flag-img img');
const options = document.querySelector ('.options ul');
const flagList = document.querySelectorAll('.options ul li');
const score = document.querySelector('h3 span');
const scoreDiv = document.querySelector('.scoreboard');
const correctAnswer = document.querySelector('.scoreboard .correct span');
const incorrectAnswer = document.querySelector('.scoreboard .incorrect span');


let currentIndex = 0;
let rightAns = 0;

/** Add function to retrieve questions from our questions.json file */
function retrieveQuestions() {
    let questionRequest = new XMLHttpRequest();
    questionRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            //number of questions per game
            let qCount = 10;
            questionNumber(qCount);
            //Add question info
            addQuestionInfo(questions[currentIndex], qCount);
            //add event listener for a click on the flag options
            flagList.forEach(li => {
                li.addEventListener('click', () => {
                    let rightAns = questions[currentIndex].correct_answer;
                    li.classList.add('active');
                    //Increase index
                    currentIndex++;

                    //automatically check answer after 5000 miliseconds
                    setTimeout(() => {
                        checkAns(rightAns, qCount);
                    }.5000);

                    setTimeout(() => {
                        //remove previous flag
                        flagImg.src = '';
                        //remove all classes (active, incorrect, correct)
                        li.classList.remove('active');
                    })
                })
            })
        }
    }
    questionRequest.open("GET", "/assets/js/questions.json", true);
    questionRequest.send();
}

retrieveQuestions();

/** Add function to count number of questions and insert in counter span */
function questionNumber(num) {
    counterSpan.innerHTML = num;
}

/** Function to populate flag images and questions options */
function addQuestionInfo(obj, counterSpan) {
    if(currentIndex < counterSpan){
        flagImg.src=`/assets/images/flags/${obj.img}`;  
        //Create options
        flagList.forEach((li, i)=>{
        //give each li a dynamic id
        li.id = `answer_${i+1}`;
        //create dynamic data attribute for each li
        li.dataset.answer=obj[`option`][i];
        //insert the option in the li
        li.innerHTML = obj[`option`][i];
        });
    }
}

/** Function to check if answer is correct or incorrect */
function checkAns(rAnswer, counterSpan) {
    let chosenAns;
    for (let i = 0; i < flagList.length; i++){
        if(flagList[i].classList.contains('active')){
            chosenAns = flagList[i].dataset.answer;
            if(rAnswer === chosenAns){
                flagList[i].classList.add('sucess');
                rightAns++;
                score.innerHTML = rightAns++;
            }else{
                flagList[i].classList.add('wrong');
            }
        }
    }
}