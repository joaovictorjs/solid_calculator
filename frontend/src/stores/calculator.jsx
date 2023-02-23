import { createSignal } from "solid-js";

const keys = [
  { value: "clear", text: "CE", color: "#FF4C41", span: 1 },
  { value: "delete", text: "DEL", color: "#FF6E41", span: 2 },
  { value: "/", text: "÷", color: "#00B272", span: 1 },

  { value: "7", text: "7", color: "#A6A6A6", span: 1 },
  { value: "8", text: "8", color: "#A6A6A6", span: 1 },
  { value: "9", text: "9", color: "#A6A6A6", span: 1 },
  { value: "*", text: "×", color: "#00B272", span: 1 },

  { value: "4", text: "4", color: "#A6A6A6", span: 1 },
  { value: "5", text: "5", color: "#A6A6A6", span: 1 },
  { value: "6", text: "6", color: "#A6A6A6", span: 1 },
  { value: "-", text: "-", color: "#00B272", span: 1 },

  { value: "1", text: "1", color: "#A6A6A6", span: 1 },
  { value: "2", text: "2", color: "#A6A6A6", span: 1 },
  { value: "3", text: "3", color: "#A6A6A6", span: 1 },
  { value: "+", text: "+", color: "#00B272", span: 1 },

  { value: "0", text: "0", color: "#A6A6A6", span: 2 },
  { value: ".", text: ",", color: "#A6A6A6", span: 1 },
  { value: "equals", text: "=", color: "#007DB2", span: 1 },
];

const initialInput = "0+0";
const initialResult = "0";

const [input, setInput] = createSignal(initialInput);
const [result, setResult] = createSignal(initialResult);

const clearInputs = () => {
  setInput(initialInput);
  setResult(initialResult);
};

const deleteLast = () => {
  setInput((prev) => {
    if (prev.length === 1) return initialInput;
    return prev.slice(0, prev.length - 1);
  });
};

const resolveOperations = () => {
  let value = parseFloat(eval(input()));
  if (value === undefined) return;

  const decimal = value.toString().split(".");
  if (decimal.length > 1) {
    value = value.toFixed(decimal[1].length > 1 ? 2 : 1);
  }

  setResult(value);
};

const addInput = (value) => {
  setInput((prev) => {
    if (prev === initialInput) return value;
    return prev + value;
  });
};

const handleClick = (value) => {
  if (value === "clear") return clearInputs();

  if (value === "delete") return deleteLast();

  if (value === "equals") return resolveOperations();

  return addInput(value);
};

export { keys, handleClick, input, result };
