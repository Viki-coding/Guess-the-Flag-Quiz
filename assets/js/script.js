/** Add function to retrieve questuibs frin our questions.jon file */
function retrieveQuestions(){
    let questionRequest = new XMLHttpRequest();
    questionRequest.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            //questions for each new game
        }
    }
    questionRequest.open("GET", "js/questions.json", true);
    questionRequest.send();
}

