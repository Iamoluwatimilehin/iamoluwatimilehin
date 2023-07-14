function startTime(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();

   
    // zero function
    hour = addZero(hour)
    minutes = addZero(minutes)
 
    let period = (hour >= 12) ? 'PM' : 'AM';

    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour === 0) ? 12 : hour;

    document.getElementById("time").innerHTML = hour + ":" + minutes + " " + period
    setTimeout(startTime, 500)
}

function addZero(value){
 if(value < 10){
    value = "0"+value;
 }return value
}

//screen

let screenEl = document.getElementById("screen")




//Calculate

let currentOperation = '';
let currentValue = '';

function btnnum(number) {
    if (currentValue == 0) {
        currentValue = " ";     
    }
  currentValue += number;
  screenEl.value = currentValue;
}

function backSpace(){
    currentValue = currentValue.slice(0, -1);
    screenEl.value = currentValue;

}

function clearResult() {
  currentValue = '';
  screenEl.value = '';
}

function btngray(operation) {
  currentOperation = operation;
  currentValue += operation;
  screenEl.value = currentValue;
}

function calculateResult() {
try{
    let result = eval(currentValue);
    result = parseFloat(result.toFixed(2));
    result = result.toString();

    currentValue = result;
    screenEl.value = currentValue;
  }
catch(error){
    screenEl.value = 'Error: ' + error.message;
}  }


function sine(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.sin(screenEl.value * Math.PI / 180));
        screenEl.value = currentValue;
      }
}
function cosine(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.cos(screenEl.value * Math.PI / 180));
        screenEl.value = currentValue;
      }
}
function tan(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.tan(screenEl.value * Math.PI / 180));
        screenEl.value = currentValue;
      }
}

//Inverse

function invsine(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.asin(screenEl.value)*(180 / Math.PI));
        screenEl.value = currentValue;
      }
}
function invcosine(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.acos(screenEl.value)*(180 / Math.PI));
        screenEl.value = currentValue;
      }
}
function invtan(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.atan(screenEl.value)*(180 / Math.PI));
        screenEl.value = currentValue;
      }
}

//Log

function ln(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.log(screenEl.value));
        screenEl.value = currentValue;
      }
}
function log(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.log10(screenEl.value));
        screenEl.value = currentValue;
      }
}

//Percentage
function percent(){
    if (currentValue !== '') {
        currentValue =  parseFloat(screenEl.value/100);
        screenEl.value = currentValue;
      }
}
//Square
function square(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.pow(screenEl.value, 2));
        screenEl.value = currentValue;
      }
}
//Cube
function cube(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.pow(screenEl.value, 3));
        screenEl.value = currentValue;
      }
}
//Sqrt
function sqrt(){
    if (currentValue !== '') {
        currentValue =  parseFloat(Math.sqrt(screenEl.value));
        screenEl.value = currentValue;
      }
         
}

function plusminus(){
    if (currentValue !== '') {
        currentValue =  parseFloat((currentValue) * -1);
        screenEl.value = currentValue;
      }
        
}

function exp(){
    if (currentValue !== '') {
    currentValue = parseFloat(Math.pow(10, screenEl.value));
    screenEl.value = currentValue;
  }
    
}

function insertPi() {
    currentValue += Math.PI;
    screenEl.value = currentValue;
  }

  function point() {
    currentValue += ".";
    screenEl.value = currentValue;
  } 

  