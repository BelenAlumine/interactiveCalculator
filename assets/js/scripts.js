const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const equal = document.getElementById('equal');
const mult = document.getElementById('mult');
const div = document.getElementById('div');
const sum = document.getElementById('sum');
const subt = document.getElementById('subt');
const decimal = document.getElementById('decimal');
const reset = document.getElementById('reset');
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

for(let a = 0; a < numbers.length; a++){
   numbers[a].addEventListener('click', function(){
      writeScreen(this.textContent)
   });
}

function writeScreen(value) {

    //FIRST NUMBER
    if ((operator === null) && (!(isNaN(value)))) {
        n1 = n1 + value
        screen.textContent = screen.textContent + value;
    }
    else if ((operator === null) && (value === decimal.textContent) ) {
        n1 = n1 + value
        screen.textContent = screen.textContent + value;
    }
    //FIRST OPERATOR
    else if ((operator === null) && isNaN(value)) {
        operator = value;
        screen.textContent = screen.textContent + value;
    }
    //SECOND NUMBER
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
    //SECOND OPERATOR
    else if ((operator != null) && n2 != null) {
        calculate()
        operator = value;
        screen.textContent = screen.textContent + value;
    }

}

function calculate() {
   if (operator === '+') {
    n1 = parseFloat(n1) + parseFloat(n2);
   }
   else if (operator === '-') {
    n1 = parseFloat(n1) - parseFloat(n2);
   }
   else if (operator === '*') {
    n1 = parseFloat(n1) * parseFloat(n2);
   }
   else if (operator === '/') {
    n1 = parseFloat(n1) / parseFloat(n2);
   }
   else {
    n1 = 'math ERROR';
   }
   
   n2 = null;
   screen.textContent = n1;
}

function clear() {
    n1 = 0;
    operator = null;
    n2 = null;
   screen.textContent = '0';
}
