const addButton = document.querySelector('.add-button');
const subtractButton = document.querySelector('.subtract-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const calculateButton = document.querySelector('.calculate');
const inputValues = document.querySelector('.input-values');
const number = document.querySelectorAll('.number');
const calc = [];
const displayInput = document.querySelector('#calculation');

const updateDisplay = () => {
    displayInput.textContent = calc.join(' ');
}

addButton.addEventListener('click', () => {
    calc.push("+");
    updateDisplay();
});

subtractButton.addEventListener('click', () => {
    calc.push("-");
    updateDisplay();
});

multiplyButton.addEventListener('click', () => {
    calc.push("*");
    updateDisplay();
});

divideButton.addEventListener('click', () => {
    calc.push("/");
    updateDisplay();
});


number.forEach((num) => {
    num.addEventListener('click', (e) => {
        console.log(e.target);
        const value = e.target.textContent;
        calc.push(Number(value));
        console.log(calc)
        updateDisplay();
    });
});

calculateButton.addEventListener('click', () => {
    
    const expression = calc.join('');
    console.log(expression);
    const result = eval(expression);
    const displayResult = document.querySelector('#result');
    displayResult.textContent = `Result: ${result}`;
    calc.length = 0;
    updateDisplay();
});




