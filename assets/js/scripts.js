let screen = document.querySelector('.screen');
let numbers = document.querySelectorAll('.number');
//let operations = document.querySelectorAll('.symbol');
let equal = document.getElementById('equal');
let mult = document.getElementById('mult');
let div = document.getElementById('div');
let sum = document.getElementById('sum');
let subt = document.getElementById('subt');
let decimal = document.getElementById('decimal');
let reset = document.getElementById('reset');
let n1 = 0;
let operator = null;
let n2 = null;

equal.addEventListener('click', () => calculate());

mult.addEventListener('click', () => writeScreen(mult.textContent));
div.addEventListener('click', () => writeScreen(div.textContent));
sum.addEventListener('click', () => writeScreen(sum.textContent));
subt.addEventListener('click', () => writeScreen(subt.textContent));
decimal.addEventListener('click', () => writeScreen(decimal.textContent));

reset.addEventListener('click', () => clear());

for(var a = 0; a < numbers.length; a++){
   numbers[a].addEventListener('click', function(){
      writeScreen(this.textContent)
   });
}

function writeScreen(value) {
    if ((screen.textContent === '0') && (value != decimal.textContent)) {
        screen.textContent = ' ';
    }
    if ((operator === null) && (!(isNaN(value)))) {
        n1 = n1 + value
        screen.textContent = screen.textContent + value;
    }
    else if ((operator === null) && (value === decimal.textContent) ) {
        n1 = n1 + value
        screen.textContent = screen.textContent + value;
    }
    else if ((operator === null) && isNaN(value)) {
        operator = value;
        screen.textContent = screen.textContent + value;
    }
    else if ((operator != null) && !(isNaN(value))) {
        if (n2 === null) {
            n2 = 0;
        }
        n2 = n2 + value
        screen.textContent = screen.textContent + value;
    }
    else if ((operator != null) && (value === decimal.textContent)) {
        if (n2 === null) {
            n2 = 0;
        }
        n2 = n2 + value
        screen.textContent = screen.textContent + value;
    }
}

function calculate() {
   var res = 0;

   if (operator === '+') {
    res = parseFloat(n1) + parseFloat(n2);
   }
   else if (operator === '-') {
    res = parseFloat(n1) - parseFloat(n2);
   }
   if (operator === '*') {
    res = parseFloat(n1) * parseFloat(n2);
   }
   else if (operator === '/') {
    res = parseFloat(n1) / parseFloat(n2);
   }
   screen.textContent = res;
}

function clear() {
    n1 = 0;
    operator = null;
    n2 = null;
   screen.textContent = '0';
}