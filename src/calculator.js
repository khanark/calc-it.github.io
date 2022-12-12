class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear();
  }

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  updateDisplay() {
    this.currentTextElement.textContent = this.currentOperand;
    this.previousTextElement.textContent = this.previousOperand;
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operator = undefined;
  }

  delete() {}

  chooseOperation(operation) {
    if (!this.currentOperand) return;
    if (this.previousOperand) {
      this.compute();
    }
    this.operator = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let result;
    const previousVal = parseFloat(this.previousOperand);
    const currentVal = parseFloat(this.currentOperand);
    if (isNaN(previousVal) || isNaN(currentVal)) return;
    switch (this.operator) {
      case '*':
        result = previousVal * currentVal;
        break;
      case '-':
        result = previousVal - currentVal;
        break;
      case '+':
        result = previousVal + currentVal;
        break;
      case '/':
        result = previousVal / currentVal;
        break;
      default:
        return;
    }
    this.previousOperand = result;
    this.operator = undefined;
    this.currentOperand = '';
  }
}

export default Calculator;
