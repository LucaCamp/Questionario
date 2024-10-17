import { QUESTIONS } from "./data.js";

//Caricamento Modal
document.addEventListener("DOMContentLoaded", function () {
  var modal = new bootstrap.Modal(document.getElementById("modal"), {
    backdrop: "static",
    keyboard: false,
  });
  modal.show();
});

let questionForm = document.getElementById("question-form");
let currentSectionIndex = 0;

let sections = new Set();
QUESTIONS.forEach((question) => {
  let firstLetter = question.id.charAt(0);
  sections.add(firstLetter);
});

sections = Array.from(sections);

//crea i radio button per ogni domanda
function createRadioButtons(questionId, index) {
  let radioHTML = "";

  QUESTIONS[index].options.forEach((option, optionIndex) => {
    radioHTML += `
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="question${questionId}" id="${questionId}_${optionIndex}" value="${option}">
                <label class="form-check-label radio-label" for="${questionId}_${optionIndex}">${option}</label>
            </div>
        `;
  });

  return radioHTML;
}

//Genera tutte le domande a partire dall'array QUESTIONS
function createCards() {
  let fullHTML = "";

  for (let i = 0; i < QUESTIONS.length; i++) {
    let questionHTML = `
        <div class="row mb-2 question-row" data-id="${QUESTIONS[i].id}">
            <div class="col-sm-3"></div>
            <div class="col-lg-6">
                <div class="card">
                    <h5 class="card-header">${QUESTIONS[i].text}</h5>
                    <div class="card-body">
                        <div class="w-100 d-flex flex-wrap justify-content-around">
                            ${createRadioButtons(QUESTIONS[i].id, i)}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
        `;
    fullHTML += questionHTML;
  }
  questionForm.innerHTML = fullHTML;
}

createCards();

//Mostra una determinata sezione
function showSection(letter) {
  const allQuestions = document.querySelectorAll(".question-row");
  allQuestions.forEach((question) => {
    question.style.display = "none";
  });

  const filteredQuestions = document.querySelectorAll(
    `.question-row[data-id^="${letter}"]`
  );
  filteredQuestions.forEach((question) => {
    question.style.display = "flex";
  });

  updateButtons();
}

//Abilita il pulsante indietro nella prima sezione e avanti nell'ultima
function updateButtons() {
  document.getElementById("btn-indietro").disabled = currentSectionIndex === 0;
  document.getElementById("btn-avanti").disabled =
    currentSectionIndex === sections.length - 1;
}

//Event listener Btn avanti
document.getElementById("btn-avanti").addEventListener("click", function () {
  if (currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
    showSection(sections[currentSectionIndex]);
  }
});
//Event listener Btn indietro
document.getElementById("btn-indietro").addEventListener("click", function () {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    showSection(sections[currentSectionIndex]);
  }
});

// Mostra la prima sezione all'avvio
showSection(sections[currentSectionIndex]);
