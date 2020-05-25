const MAX_MINUTES = 99;
let configMinute = 25;

// Add event listener to id=session-up
document.getElementById('session-up').addEventListener('click', raiseMinutes);
document.getElementById('session-down').addEventListener('click', decreaseMinutes);
// let configBreak

// Setto variabili minuti secondi e break
// Imposto session e break tramite pulsanti up and down
// Schiaccio il pulsante PLAY
// Arrivo a zero il countdown fermo il timer su 00:00
// Cambia testo e diventa break con i minuti del break
// Schiaccio pulsante PLAY per partire con il break
// Il countdown si ferma sullo 00:00
// Rivalorizzo in session con i minuti del pomodoro timer
// se premo play riparte un altro pomodoro

//TASTO UP
/*
se il valore e' inferiore o uguale a 99 (costante)
  incremento di uno il valore di session/break
*/
function raiseMinutes(){
  if(configMinute < MAX_MINUTES){
    configMinute++;
    document.getElementById('session-minute').innerText = configMinute.toString();
    console.log(configMinute);
  }
}

//TASTO DOWN
/*
se il valore e' superiore a 0
   decremento di uno il valore di session/break

*/

function decreaseMinutes(){
    if(configMinute > 0){
        configMinute--;
        document.getElementById('session-minute').innerText = configMinute.toString();
        console.log(configMinute);
    }
}

function raiseMinutes(){
  if(configMinute < MAX_BREAK){
    configMinute++;
    document.getElementById('session-minute').innerText = configMinute.toString();
    console.log(configMinute);
  }
}