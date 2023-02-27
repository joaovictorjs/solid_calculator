const [initInputs, initResult, initDisplay, initParenthesis] = [
  "0+0",
  "= 0",
  "0+0",
  "(",
];

class CalculatorStore {
  inputs: String;
  result: String;
  display: String;
  parenthesis: String;

  public constructor(
    inputs: String = initInputs,
    result: String = initResult,
    display: String = initDisplay,
    parenthesis: String = initParenthesis
  ) {
    this.inputs = inputs;
    this.result = result;
    this.display = display;
    this.parenthesis = parenthesis;
  }
}

export {
  initInputs,
  initDisplay,
  initResult,
  initParenthesis,
  CalculatorStore,
};
