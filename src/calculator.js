class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear();
  }

  appendNumber(number) {
    if (typeof this.currentOperand == 'number') {
      this.currentOperand = '';
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  displayNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  updateDisplay() {
    this.currentTextElement.textContent = this.displayNumber(this.currentOperand);
    if (this.operator != null) {
      this.previousTextElement.textContent = `${this.displayNumber(this.previousOperand)} ${this.operator}`;
    } else {
      this.previousTextElement.textContent = this.displayNumber(this.previousOperand);
    }
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operator = undefined;
  }

  chooseOperation(operation) {
    if (operation == '-' && typeof this.currentOperand !== "number" && (!this.currentOperand.includes('-') && !this.currentOperand)) {
      return this.appendNumber(operation);
    }
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
    this.currentOperand = result;
    this.operator = undefined;
    this.previousOperand = '';
  }
}

export default Calculator;
