//Flag Quiz App Front End With Salimi' code interpreted for structure of quiz game. Link in README//

//Select elements
const counterSpan = document.querySelector('.counter span');
const divFlagImg = document.querySelector('.flag-img');
const flagImg = document.querySelector('.flag-img img');
const options = document.querySelector('.options ul');
const flagList = document.querySelectorAll('.options ul li');
const score = document.querySelector('h3 span');
const scoreDiv = document.querySelector('.scoreboard');
const correctAnswer = document.querySelector('.scoreboard .correct span');
const incorrectAnswer = document.querySelector('.scoreboard .incorrect span');
const btnReset = document.querySelector('#reset');
const instructions = document.querySelector('.instructions');


let currentIndex = 0;
let rightAns = 0;

/** Add function to display Instructions button and when clicked displays instructions, when button clicked again toggles back to button, code inspired by W3 schools link in Readme */
function toggle() {
    let instructionsBox = document.getElementById("instructionsBox");
    if (instructionsBox.style.display === "none") {
        instructionsBox.style.display = "block";
    } else {
        instructionsBox.style.display = "none";
    }
}


/** Add function to retrieve questions from our questions.json file */
function retrieveQuestions() {
    let questionRequest = new XMLHttpRequest();
    questionRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            //number of questions per game
            let qCount = 5;
            questionNumber(qCount);
            //Select random flags/answers for each game
            questions = questions.sort(() => Math.random() - Math.random()).slice(0, 10);
            //Add question info
            addQuestionInfo(questions[currentIndex], qCount);
            //add event listener for a click on the flag options
            flagList.forEach(li => {
                li.addEventListener('click', () => {
                    let rightAns = questions[currentIndex].correct_answer;
                    li.classList.add('active');
                    //Increase index
                    currentIndex++;
                    questionNumber(5);

                    //once answer is checked move automatically move to next question after 500 miliseconds
                    setTimeout(() => {
                        checkAns(rightAns, qCount);
                    }, 1000);

                    setTimeout(() => {
                        //remove previous flag
                        flagImg.src = '';
                        //remove all classes (active, incorrect, correct)
                        li.classList.remove('active');
                        li.classList.remove('success');
                        li.classList.remove('wrong');

                        //Add question data info to show next question
                        addQuestionInfo(questions[currentIndex], qCount);
                    }, 1600);

                    //Display results
                    setTimeout(() => {
                        displayResults(qCount);
                    }, 1700);
                });
            });
        }
    };
    questionRequest.open("GET", "assets/js/questions.json", true);
    questionRequest.send();
    questionNumber(5);
}

retrieveQuestions();

/** Add function to count number of questions and insert in counter span */
function questionNumber(num) {
    counterSpan.innerHTML = `${currentIndex+1} of ${num}`;
}

/** Function to populate flag images and questions options */
function addQuestionInfo(obj, counterSpan) {
    if (currentIndex < counterSpan) {
        flagImg.src = `assets/images/flags/${obj.img}`;
        //Create options
        flagList.forEach((li, i) => {
            //give each li a dynamic id
            li.id = `answer_${i+1}`;
            //create dynamic data attribute for each li
            li.dataset.answer = obj[`option`][i];
            //insert the option in the li
            li.innerHTML = obj[`option`][i];
        });
    }
}

/** Function to check if answer is correct or incorrect */
function checkAns(rAnswer, counterSpan) {
    let chosenAns;
    for (let i = 0; i < flagList.length; i++) {
        if (flagList[i].classList.contains('active')) {
            chosenAns = flagList[i].dataset.answer;
            if (rAnswer === chosenAns) {
                flagList[i].classList.add('success');
                rightAns++;
                score.innerHTML = rightAns;
            } else {
                flagList[i].classList.add('wrong');
            }
            Array.from(options.children).forEach(options =>{
                if(options.dataset.rAnswer === "true"){
                    options.classList.add("success")
                }
            })
        }
    }
}

//Function to display results
function displayResults(counter) {
    if (currentIndex === counter) {
        options.innerHTML = '';
        divFlagImg.innerHTML = '';
        instructions.style.display = 'none';
        scoreDiv.style.display = 'block';
        correctAnswer.innerHTML = rightAns;
        incorrectAnswer.innerHTML = counter - rightAns;
    }
}


//Reset new game
btnReset.addEventListener('click', () => {
    window.location.reload();
});