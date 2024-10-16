import { QUESTIONS } from "./data.js";

let questionForm = document.getElementById("question-form")

//crea i radio button per ogni domanda
function createSixRadioButtons(questionId) {
    let radioHTML = '';
    
    // Genera 6 radio button per ogni domanda
    for (let i = 1; i <= 6; i++) {
        radioHTML += `
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="question${questionId}" id="inlineRadio${i}" value="${i}">
                <label class="form-check-label radio-label" for="inlineRadio${i}">${i}</label>
            </div>
        `;
    }

    return radioHTML;
}

function createCards() {
    let fullHTML = '';

    for (let i = 0; i < QUESTIONS.length; i++) {
        let questionHTML = `
        <div class="row mb-5">
            <div class="col-sm-2"></div>
            <div class="col-lg-8">
                <div class="card">
                    <h5 class="card-header">${QUESTIONS[i].testo}</h5>
                    <div class="card-body">
                        <div class="w-100 d-flex flex-wrap justify-content-around">
                            ${createSixRadioButtons(QUESTIONS[i].id)}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-2"></div>
        </div>
        `;
        fullHTML += questionHTML; 
    }

    questionForm.innerHTML = fullHTML; 
}

createCards()

document.addEventListener("DOMContentLoaded", function() {
    var modal = new bootstrap.Modal(document.getElementById('modal'));  // Inizializza la modal
    modal.show();  // Mostra la modal
});

// CONSOLE LOG ON SUBMIT
function onSubmit(){
   const ANSWERS = document.querySelectorAll('input');
   ANSWERS.forEach((answer) =>{
    if(answer.checked) {
        console.log(answer.name + ' ' + answer.value)
    }
   })
}
