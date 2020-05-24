const MAX_CNFG_VALUE = 99;
let configSessionMinutes = 25;
let configBreakMinutes = 5;

document.getElementById('session-minute').innerText = configSessionMinutes.toString();
document.getElementById('break-minute').innerText = configBreakMinutes.toString();

document.getElementById('session-up').addEventListener('click', raiseSessionMinutes);
document.getElementById('session-down').addEventListener('click', decreaseSessionMinutes);
document.getElementById('break-up').addEventListener('click', raiseBreakMinutes);
document.getElementById('break-down').addEventListener('click', decreaseBreakMinutes);

function raiseSessionMinutes(){
  if(configSessionMinutes < MAX_CNFG_VALUE){
    configSessionMinutes++;
    document.getElementById('session-minute').innerText = configSessionMinutes.toString();
    console.log(configSessionMinutes);
  }
}

function decreaseSessionMinutes(){
    if(configSessionMinutes > 0){
      configSessionMinutes--;
        document.getElementById('session-minute').innerText = configSessionMinutes.toString();
        console.log(configSessionMinutes);
    }
}

function raiseBreakMinutes(){
  if(configBreakMinutes < MAX_CNFG_VALUE){
    configBreakMinutes++;
    document.getElementById('break-minute').innerText = configBreakMinutes.toString();
    console.log(configBreakMinutes);
  }
}

function decreaseBreakMinutes(){
  if(configBreakMinutes > 0){
    configBreakMinutes--;
      document.getElementById('break-minute').innerText = configBreakMinutes.toString();
      console.log(configBreakMinutes);
  }
}
