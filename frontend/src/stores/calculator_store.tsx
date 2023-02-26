import { createStore } from 'solid-js/store';
import { Key, keys } from '../models/key';
import { createComputed } from 'solid-js';

let [initResult, initDisplay, initInputs] = [
  '= 0',
  '0+0',
  [new Key('0'), new Key('+'), new Key('0')],
];

class CalculatorState {
  result: String;
  display: String;
  inputs: Key[];

  public constructor(
    result: String = initResult,
    display: String = initDisplay,
    inputs: Key[] = initInputs
  ) {
    this.result = result;
    this.display = display;
    this.inputs = inputs;
  }
}

const [state, setState] = createStore(new CalculatorState());

const areEquals = (v1: Key[], v2: Key[]): Boolean => {
  for (let i = 0; i < v1.length; i++) {
    if (v1[i] === v2[i]) continue;
    return false;
  }
  return true;
};

const clearAll = () => {
  setState('inputs', initInputs);
};

const handleClick = (key: Key) => {
  if (key.value === 'clear') return clearAll();

  if (key.value === 'equals') {
    if (areEquals(state.inputs, initInputs) || state.result === initResult) {
      return;
    }

    let resKeys: Key[] = [];

    state.result
      .replace('= ', '')
      .split('')
      .forEach((every) => {
        console.log(every);
        resKeys.push(new Key(every));
      });
    return setState('inputs', [...resKeys]);
  }

  setState('inputs', (prev) => {
    if (areEquals(prev, initInputs)) return [key];
    return [...prev, key];
  });
};

const deleteLast = () => {
  setState('inputs', (prev) => {
    if (prev.length === 1) return [...initInputs];
    return [...prev.slice(0, prev.length - 1)];
  });
};

createComputed(() => {
  let humanRedeable = '';
  let expression = '';
  let res = '= ';
  state.inputs.forEach((i) => {
    humanRedeable += i.text;
    expression += i.value;

    try {
      setState('result', '= ' + eval(expression));
    } catch (e) {}
  });

  setState('display', humanRedeable);
});

export { state, setState, handleClick, clearAll, deleteLast };
