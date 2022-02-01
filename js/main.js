// Creare le variabili che inzialmente mi posso servire
let container = document.getElementById("container");
const button = document.getElementById("play");
let box = "";


// Salvare il valore della difficolta scelta dal giocatore
let levels = document.getElementById("levels");
let difficulty = "";

// Creare un evento sul bottone play per avviare il gioco
button.addEventListener("click",
  function(){
    container.innerHTML = "";

    // Stabilire delle condizioni in base alla difficoltà scelta
    if(levels.value == "easy"){
      difficulty = 100;
      box = "box-small"; 
    } else if(levels.value == "hard"){
      difficulty = 81;
      box = "box-medium"; 
    } else{
      difficulty = 49;
      box = "box-big";  
    }

    // Creare un ciclo for, per stampare un tot di box in base alla difficoltà selezionata
    for(let i = 0; i<difficulty; i++){
      const div = document.createElement("div");

      // Inserire le classi che mi servono
      container.appendChild(div);
      div.innerText += [i + 1];
      div.classList.add(box);
      div.classList.add("box");

      div.addEventListener("click", addEventClick)
    }
    // Creo funzione per ascoltatore di eventi al click
    function addEventClick (){

      // Rimuovo la possibilità del click dopo aver premuto già una volta la caseela
      this.removeEventListener("click", addEventClick);

      // Salvo il valore dei box all'interno di questa variabile
      let numberBox = parseInt(this.innerText);

      let click = [];
      // Faccio in modo che quando si preme su una casella ed essa sia una bomba, la casella diventi rossa, altrimenti diventi azzur
      if (numbersBomb.includes(numberBox)){
        this.classList.add("bomb")
      } else{
        this.classList.add("active");
        click.push(numberBox);
      }
    }
    
    // Creo un array per salvare in numeri generati per le bombe
    const numbersBomb = [];
    // Faccio generare 16 numeri casuali
    while(numbersBomb.length < 16){
      let number = randomNumber(difficulty, 1);
      // Creo una condizione dove indico che se il numero è gia presente tra quelli generati, ne deve essere generato un altro
      if(!numbersBomb.includes(number)){
        numbersBomb.push(number);
      }
    }
    console.log(numbersBomb);
  }
)

// Creo una funziona che mi da dei numeri casuali con un min e un max
function randomNumber (max , min){
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number
}


// Salvare in un array tutti i click effettuati
// Premendo una bomba finisce la partia
// Far spuntare il punteggio ottenuto
// E dopo aver perso far spuntare tutte le altre bombe