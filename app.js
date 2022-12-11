import Calculator from './src/calculator.js';

const result = document.getElementById("result")
const calculator = new Calculator();

document.querySelector('.wrapper').addEventListener('click', ev => {
  const { target } = ev;
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  const { value } = target;

  if (!isNaN(value)) {
    result.value += value
    calculator.current += value;
  } else {
    calculator.calculate();
    calculator.operator = value;
  }

  console.log(calculator);
});
