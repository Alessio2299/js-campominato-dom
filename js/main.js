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
    let click = [];


    let score = document.createElement("span");
    let gameOver = document.createElement("h1");
    container.appendChild(score);
    container.appendChild(gameOver);

    // Creo funzione per ascoltatore di eventi al click
    function addEventClick (){

      // Rimuovo la possibilità del click dopo aver premuto già una volta la caseela
      this.removeEventListener("click", addEventClick);

      // Salvo il valore dei box all'interno di questa variabile
      let numberBox = parseInt(this.innerText);

      
      // Faccio in modo che quando si preme su una casella ed essa sia una bomba, la casella diventi rossa, altrimenti diventi azzurra
      if (numbersBomb.includes(numberBox)){
        gameOver.classList.add("style");
        gameOver.innerHTML = "Hai perso";
        endGame();
      } else{
        this.classList.add("active");
        // Salvo in un array tutti i click effettuati
        click.push(numberBox);
      }
        // Far spuntare il punteggio ottenuto
        score.innerHTML = `Il tuo punteggio attuale è : ${click.length}`;
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

    // Creo una funzione per la fine del gioco
    function endGame (){
      let allBox = document.getElementsByClassName("box");
      for(let i = 0; i < allBox.length; i++){
        // E dopo aver perso far spuntare tutte le altre bombe
        if(numbersBomb.includes(parseInt(allBox[i].innerText))){
          allBox[i].classList.add("bomb");
        }
        allBox[i].removeEventListener("click", addEventClick);
      }
    }
  }
)

// Creo una funziona che mi da dei numeri casuali con un min e un max
function randomNumber (max , min){
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number
}



