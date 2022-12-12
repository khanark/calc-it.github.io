import Calculator from './classes/calculator.js';

const prevousResultTextElement = document.querySelector('.previous-result');
const currentResultTextElement = document.querySelector('.current-result');

const calculator = new Calculator(prevousResultTextElement, currentResultTextElement);

document.querySelector('.wrapper').addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const { value } = e.target;

  if (!isNaN(value)) {
    calculator.appendNumber(value);
  } else if (value == 'equals') {
    calculator.compute();
  } else if (value == 'clears') {
    calculator.clear();
  } else {
    calculator.chooseOperation(value);
  }

  calculator.updateDisplay();
});
