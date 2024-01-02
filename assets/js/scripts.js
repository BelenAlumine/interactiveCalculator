let screen = document.querySelector('.screen');
let numbers = document.querySelectorAll('.number');
//let operations = document.querySelectorAll('.symbol');
let equal = document.getElementById('equal');
let mult = document.getElementById('mult');
let div = document.getElementById('div');
let sum = document.getElementById('sum');
let subt = document.getElementById('subt');
let decimal = document.getElementById('decimal');

equal.addEventListener('click', () => calculate());

mult.addEventListener('click', () => writeScreen(mult.textContent));
div.addEventListener('click', () => writeScreen(div.textContent));
sum.addEventListener('click', () => writeScreen(sum.textContent));
subt.addEventListener('click', () => writeScreen(subt.textContent));
decimal.addEventListener('click', () => writeScreen(decimal.textContent));

for(var a = 0; a < numbers.length; a++){
   numbers[a].addEventListener('click', function(){
      writeScreen(this.textContent)
   });
}

function writeScreen(value) {
    if ((screen.textContent === '0') && (value != decimal.textContent)) {
        reset();
    }
    screen.textContent = screen.textContent + value;
}

function calculate() {
   var res = 0;

   reset();
   screen.textContent = res;
}

function reset() {
   screen.textContent = ' ';
}