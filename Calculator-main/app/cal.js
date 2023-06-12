let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let clear = document.getElementById('clear');
let modul = document.getElementById('modul');
let division = document.getElementById('division');
let multiply = document.getElementById('multiply');
let sub = document.getElementById('sub');
let addition = document.getElementById('addition');
let equal = document.getElementById('equal');
let dot = document.getElementById('dot');
let zero = document.getElementById('zero');
let userInput = document.getElementById('userInput');
let displayResult = document.getElementById('displayResult');
let lastIndex = document.getElementById('lastIndex');

one.onclick = function(){
    userInput.textContent += '1';
};
two.onclick = function(){
    userInput.textContent += '2';
};
three.onclick = function(){
    userInput.textContent += '3';
};
four.onclick = function(){
    userInput.textContent += '4';
};
five.onclick = function(){
    userInput.textContent +='5';
};
six.onclick = function(){
    userInput.textContent += '6';
};
seven.onclick = function(){
    userInput.textContent += '7';
};
eight.onclick = function(){
    userInput.textContent += '8';
};
nine.onclick = function(){
    userInput.textContent += '9';
};
zero.onclick = function(){
    userInput.textContent += '0';
};
multiply.onclick = function(){
    userInput.textContent += '*';
};
sub.onclick = function(){
    userInput.textContent += '-';
};
zero.onclick = function(){
    userInput.textContent += '0';
};
addition.onclick = function(){
    userInput.textContent += '+';
};
equal.onclick = function(){
    userInput.textContent += '=';
};
dot.onclick = function(){
    userInput.textContent += '.';
};
modul.onclick = function(){
    userInput.textContent += '%';
};
division.onclick = function(){
    userInput.textContent += '/';
};
lastIndex.onclick = function(){
    let back = userInput.textContent;
    let stringVal =  back.slice(0,-1);
    userInput.textContent = stringVal;
};
clear.onclick = function(){
    displayResult.classList.remove("erroMsg");
    userInput.textContent = '';
    displayResult.textContent = '';
};
equal.onclick = function(){
    try {
        let valu = String(userInput.textContent);
        let result =  eval(valu);
        displayResult.textContent = result;
    }
    catch(err) {
        displayResult.textContent = 'Error Enter correct values';
        displayResult.classList.add("erroMsg");
    }
}