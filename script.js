
const QUESTIONS = [
        { id: "A01", testo: "Il mio luogo di lavoro è sicuro (impianti elettrici, misure antincendio e di emergenza, ecc.)" },
        { id: "A02", testo: "Ho ricevuto informazione e formazione appropriate sui rischi connessi alla mia attività lavorativa e sulle relative misure di prevenzione e protezione" },
        { id: "A03", testo: "Le caratteristiche del mio luogo di lavoro (spazi, postazioni di lavoro, luminosità, rumorosità, ecc.) sono soddisfacenti" },
        { id: "A04", testo: "Ho subito atti di mobbing (demansionamento formale o di fatto, esclusione di autonomia decisionale, isolamento, estromissione dal flusso delle informazioni, ingiustificate disparità di trattamento, forme di controllo esasperato, …)" },
        { id: "A05", testo: "Sono soggetto/aa molestie sotto forma di parole o comportamenti idonei a ledere la mia dignità e a creare un clima negativo sul luogo di lavoro" },
        { id: "A06", testo: "Sul mio luogo di lavoro è rispettato il divieto di fumare" },
        { id: "A07", testo: "Ho la possibilità di prendere sufficienti pause" },
        { id: "A08", testo: "Posso svolgere il mio lavoro con ritmi sostenibili" },
        { id: "A09", testo: "Avverto situazioni di malessere o disturbi legati allo svolgimento del mio lavoro quotidiano (insofferenza, disinteresse, sensazione di inutilità, assenza di iniziativa, nervosismo, senso di depressione, insonnia, mal di testa, mal di stomaco, dolori muscolari o articolari, difficoltà respiratorie …)" },
        { id: "B01", testo: "Sono trattato correttamente e con rispetto in relazione alla mia appartenenza sindacale" },
        { id: "B02", testo: "Sono trattato correttamente e con rispetto in relazione al mio orientamento politico" },
        { id: "B03", testo: "Sono trattato correttamente e con rispetto in relazione alla mia religione" },
        { id: "B04", testo: "La mia identità di genere costituisce un ostacolo alla mia valorizzazione sul lavoro" },
        { id: "B05", testo: "Sono trattato correttamente e con rispetto in relazione alla mia etnia e/o razza" },
        { id: "B06", testo: "Sono trattato correttamente e con rispetto in relazione alla mia lingua" },
        { id: "B07", testo: "La mia età costituisce un ostacolo alla mia valorizzazione sul lavoro" },
        { id: "B08", testo: "Sono trattato correttamente e con rispetto in relazione al mio orientamento sessuale" },
        { id: "B09", testo: "Sono trattato correttamente e con rispetto in relazione alla mia disabilità (se applicabile)" },
        { id: "C01", testo: "Ritengo che vi sia equità nell’assegnazione del carico di lavoro" },
        { id: "C02", testo: "Ritengo che vi sia equità nella distribuzione delle responsabilità" },
        { id: "C03", testo: "Giudico equilibrato il rapporto tra l’impegno richiesto e la mia retribuzione" },
        { id: "C04", testo: "Ritengo equilibrato il modo in cui la retribuzione viene differenziata in rapporto alla quantità e qualità del lavoro svolto" },
        { id: "C05", testo: "Le decisioni che riguardano il lavoro sono prese dal mio responsabile in modo imparziale" },
        { id: "D01", testo: "Nel mio ente il percorso di sviluppo professionale di ciascuno è ben delineato e chiaro" },
        { id: "D02", testo: "Ritengo che le possibilità reali di fare carriera nel mio ente siano legate al merito" },
        { id: "D03", testo: "Il mio ente dà la possibilità di sviluppare capacità e attitudini degli individui in relazione ai requisiti richiesti dai diversi ruoli" },
        { id: "D04", testo: "Il ruolo da me attualmente svolto è adeguato al mio profilo professionale" },
        { id: "D05", testo: "Sono soddisfatto del mio percorso professionale all’interno dell’ente" },
        { id: "E01", testo: "So quello che ci si aspetta dal mio lavoro" },
        { id: "E02", testo: "Ho le competenze necessarie per svolgere il mio lavoro" },
        { id: "E03", testo: "Ho le risorse e gli strumenti necessari per svolgere il mio lavoro" },
        { id: "E04", testo: "Ho un adeguato livello di autonomia nello svolgimento del mio lavoro" },
        { id: "E05", testo: "Il mio lavoro mi dà un senso di realizzazione personale" },
        { id: "F01", testo: "Mi sento parte di una squadra" },
        { id: "F02", testo: "Mi rendo disponibile per aiutare i colleghi anche se non rientra nei miei compiti" },
        { id: "F03", testo: "Sono stimato e trattato con rispetto dai colleghi" },
        { id: "F04", testo: "Nel mio gruppo chi ha un’informazione la mette a disposizione di tutti" },
        { id: "F05", testo: "L’organizzazione spinge a lavorare in gruppo e a collaborare" },
        { id: "G01", testo: "La mia organizzazione investe sulle persone, anche attraverso un’adeguata attività di formazione" },
        { id: "G02", testo: "Le regole di comportamento sono definite in modo chiaro" },
        { id: "G03", testo: "I compiti e ruoli organizzativi sono ben definiti" },
        { id: "G04", testo: "La circolazione delle informazioni all’interno dell’organizzazione è adeguata" },
        { id: "G05", testo: "La mia organizzazione promuove azioni a favore della conciliazione dei tempi lavoro e dei tempi di vita" },
        { id: "H01", testo: "Sono orgoglioso quando dico a qualcuno che lavoro nel mio ente" },
        { id: "H02", testo: "Sono orgoglioso quando il mio ente raggiunge un buon risultato" },
        { id: "H03", testo: "Mi dispiace se qualcuno parla male del mio ente" },
        { id: "H04", testo: "I valori e i comportamenti praticati nel mio ente sono coerenti con i miei valori personali" },
        { id: "H05", testo: "Se potessi, comunque cambierei ente" },
        { id: "I01", testo: "La mia famiglia e le persone a me vicine pensano che l’ente in cui lavoro sia un ente importante per la collettività" },
        { id: "I02", testo: "Gli utenti pensano che l’ente in cui lavoro sia un ente importante per loro e per la collettività" },
        { id: "I03", testo: "La gente in generale pensa che l’ente in cui lavoro sia un ente importante per la collettività" },
        
        { id: "Q01", testo: "La sicurezza e la salute sul luogo di lavoro e lo stress lavoro correlato"},
        { id: "Q02", testo: "Le discriminazioni"},
        { id: "Q03", testo: "L’equità nella mia amministrazione" },
        { id: "Q04", testo: "La carriera e lo sviluppo professionale" },
        { id: "Q05", testo: "Il mio lavoro" },
        { id: "Q06", testo: "I miei colleghi" },
        { id: "Q07", testo: "Il contesto del mio lavoro" },
        { id: "Q08", testo: "Il senso di appartenenza" },
        { id: "Q09", testo: "L’immagine della mia amministrazione" },
        
        { id: "L01", testo: "Conosco le strategie della mia amministrazione" },
        { id: "L02", testo: "Condivido gli obiettivi strategici della mia amministrazione" },
        { id: "L03", testo: "Sono chiari i risultati ottenuti dalla mia amministrazione" },
        { id: "L04", testo: "È chiaro il contributo del mio lavoro al raggiungimento degli obiettivi dell’amministrazione" },
        { id: "M01", testo: "Ritengo di essere valutato sulla base di elementi importanti del mio lavoro" },
        { id: "M02", testo: "Sono chiari gli obiettivi e i risultati attesi dall’amministrazione con riguardo al mio lavoro" },
        { id: "M03", testo: "Sono correttamente informato sulla valutazione del mio lavoro" },
        { id: "M04", testo: "Sono correttamente informato su come migliorare i miei risultati" },
        { id: "N01", testo: "Sono sufficientemente coinvolto nel definire gli obiettivi e i risultati attesi dal mio lavoro" },
        { id: "N02", testo: "Sono adeguatamente tutelato se non sono d’accordo con il mio valutatore sulla valutazione della mia performance" },
        { id: "N03", testo: "I risultati della valutazione mi aiutano veramente a migliorare la mia performance" },
        { id: "N04", testo: "La mia amministrazione premia le persone capaci e che si impegnano" },
        { id: "N05", testo: "Il sistema di misurazione e valutazione della performance è stato adeguatamente illustrato al personale"},
        { id: "O01", testo: "Mi aiuta a capire come posso raggiungere i miei obiettivi" },
        { id: "O02", testo: "Riesce a motivarmi a dare il massimo nel mio lavoro" },
        { id: "O03", testo: "È sensibile ai miei bisogni personali" },
        { id: "O04", testo: "Riconosce quando svolgo bene il mio lavoro" },
        { id: "O05", testo: "Mi ascolta ed è disponibile a prendere in considerazione le mie proposte" },
        { id: "P01", testo: "Agisce con equità, in base alla mia percezione" },
        { id: "P02", testo: "Agisce con equità, secondo la percezione dei miei colleghi di lavoro" },
        { id: "P03", testo: "Gestisce efficacemente problemi, criticità e conflitti" },
        { id: "P04", testo: "Stimo il mio capo e lo considero una persona competente e di valore" }
]

let questionForm = document.getElementById("question-form")

//crea i radio button per ogni domanda
function createRadioButtons(questionId) {
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
        <div class="row mb-4">
            <div class="col-sm-2"></div>
            <div class="col-lg-8">
                <div class="card">
                    <h5 class="card-header">${QUESTIONS[i].testo}</h5>
                    <div class="card-body">
                        <div class="w-100 justify-content-around d-flex">
                            ${createRadioButtons(QUESTIONS[i].id)}
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