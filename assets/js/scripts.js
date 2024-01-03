const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const equal = document.getElementById('equal');
const mult = document.getElementById('mult');
const div = document.getElementById('div');
const sum = document.getElementById('sum');
const subt = document.getElementById('subt');
const decimal = document.getElementById('decimal');
const reset = document.getElementById('reset');
let n1 = ' ';
let operator = ' ';
let n2 = ' ';

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
    if ((operator === ' ') && (!(isNaN(value)))) {
        n1 = n1 + value
        screen.textContent = screen.textContent + value;
    }
    else if ((operator === ' ') && (value === decimal.textContent) ) {
        n1 = n1 + value
        screen.textContent = screen.textContent + value;
    }
    //FIRST OPERATOR
    else if ((operator === ' ') && isNaN(value)) {
        operator = value;
        screen.textContent = screen.textContent + value;
    }
    //SECOND NUMBER
    else if ((operator != ' ') && !(isNaN(value))) {
        n2 = n2 + value
        screen.textContent = screen.textContent + value;
    }
    else if ((operator != ' ') && (value === decimal.textContent)) {
        n2 = n2 + value
        screen.textContent = screen.textContent + value;
    }
    //SECOND OPERATOR
    else if ((operator != ' ') && n2 != ' ') {
        calculate()
        operator = value;
        screen.textContent = screen.textContent + value;
    }

}

function calculate() {

    switch(operator){
        case "+":
            n1 = parseFloat(n1) + parseFloat(n2);
            n2 = ' ';
            operator = ' ';
            screen.textContent = n1;
          break;
        case "-":
            n1 = parseFloat(n1) - parseFloat(n2);
            n2 = ' ';
            operator = ' ';
            screen.textContent = n1;
            break;
        case "*":
            n1 = parseFloat(n1) * parseFloat(n2);
            n2 = ' ';
            operator = ' ';
            screen.textContent = n1;
          break;
        case "/":
            n1 = parseFloat(n1) / parseFloat(n2);
            n2 = ' ';
            operator = ' ';
            screen.textContent = n1;
          break;
      }
}


function clear() {
    n1 = ' ';
    operator = ' ';
    n2 = ' ';
   screen.textContent = ' ';
}
