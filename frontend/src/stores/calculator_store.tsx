import { createStore } from "solid-js/store";
import Key from "../models/key";
import { CalculatorStore } from "../models/CalculatorStore";
import { createComputed, createSignal } from "solid-js";
import { ToggleTheme } from "../../wailsjs/go/main/App";

const getStorageTheme = (): string => {
  let theme = localStorage.getItem("theme");
  return theme || "light";
};

const [initInputs, initResult, initDisplay, initialTheme] = [
  "0+0",
  "= 0",
  "0+0",
  getStorageTheme(),
];

const [parentheses, setParentheses] = createSignal("(");

const [store, setStore] = createStore<CalculatorStore>({
  inputs: initInputs,
  result: initResult,
  display: initDisplay,
  theme: initialTheme,
  keys: [
    //line 0
    {
      text: "CE",
      value: "clear",
      span: 2,
      type: "operation",
      shortcut: "Delete",
      click: clearAll,
    },
    {
      text: "(",
      value: "(",
      span: 1,
      type: "operation",
      shortcut: "(",
      click: function () {
        parenthesesResolver.bind(this)();
        toggleParentheses();
      },
    },
    {
      text: "÷",
      value: "/",
      span: 1,
      type: "operation",
      shortcut: "/",
      click: function () {
        addNumericInput.bind(this)();
      },
    },

    //line 1
    {
      text: "7",
      value: "7",
      span: 1,
      type: "numeric",
      shortcut: "7",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "8",
      value: "8",
      span: 1,
      type: "numeric",
      shortcut: "8",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "9",
      value: "9",
      span: 1,
      type: "numeric",
      shortcut: "9",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "×",
      value: "*",
      span: 1,
      type: "operation",
      shortcut: "*",
      click: function () {
        addNumericInput.bind(this)();
      },
    },

    //line 2
    {
      text: "4",
      value: "4",
      span: 1,
      type: "numeric",
      shortcut: "4",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "5",
      value: "5",
      span: 1,
      type: "numeric",
      shortcut: "5",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "6",
      value: "6",
      span: 1,
      type: "numeric",
      shortcut: "6",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "-",
      value: "-",
      span: 1,
      type: "operation",
      shortcut: "-",
      click: function () {
        addNumericInput.bind(this)();
      },
    },

    //line 3
    {
      text: "1",
      value: "1",
      span: 1,
      type: "numeric",
      shortcut: "1",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "2",
      value: "2",
      span: 1,
      type: "numeric",
      shortcut: "2",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "3",
      value: "3",
      span: 1,
      type: "numeric",
      shortcut: "3",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "+",
      value: "+",
      span: 1,
      type: "operation",
      shortcut: "+",
      click: function () {
        addNumericInput.bind(this)();
      },
    },

    //line 4
    {
      text: ".",
      value: ".",
      span: 1,
      type: "numeric",
      shortcut: ".",
      click: function (this) {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "0",
      value: "0",
      span: 1,
      type: "numeric",
      shortcut: "0",
      click: function () {
        addNumericInput.bind(this)();
      },
    },
    {
      text: "=",
      value: "equals",
      span: 2,
      type: "operation",
      shortcut: "=",
      click: equals,
    },
  ],
});

const addNumericInput = function (this: Key) {
  setStore("inputs", (prev) => {
    if (prev === initInputs) return this.value;
    return prev + this.value;
  });

  setStore("display", (prev) => {
    if (prev === initDisplay) return this.text;
    return prev + this.text;
  });
};

createComputed(() => {
  try {
    let res: string = eval(store.inputs).toString();

    if (res.includes(".")) {
      const len = res.split(".")[1].length;
      res = parseFloat(res).toFixed(len > 1 ? 2 : 1);
    }

    setStore("result", `= ${res}`);
  } catch (e) {}
});

function clearAll() {
  setStore("inputs", initInputs);
  setStore("display", initDisplay);
  setStore("result", initResult);
}

function parenthesesResolver(this: Key) {
  if (
    this.value.includes("(") &&
    store.inputs.length > 0 &&
    store.inputs !== initInputs
  ) {
    const last = store.inputs[store.inputs.length - 1];
    const key = store.keys.find((prev) => prev.value === last);
    if (key?.type === "numeric") {
      store.keys.find((prev) => prev.value === "*")?.click();
    }
  }

  if (this.value.includes(")")) {
    const last = store.inputs[store.inputs.length - 1];
    if (last.includes("(")) {
      store.keys.find((prev) => prev.value.includes("1"))?.click();
    }
  }

  addNumericInput.bind(this)();
}

function toggleParentheses() {
  setStore("keys", (prev) => {
    const keys = [...prev];
    const old = prev[1];
    const parentheses = {
      ...old,
      value: old.value.includes("(") ? ")" : "(",
      text: old.value.includes("(") ? ")" : "(",
      shortcut: old.value.includes("(") ? ")" : "(",
    };
    keys[1] = parentheses;
    return keys;
  });
}

function equals() {
  if (store.inputs !== initInputs) {
    const value = store.result.replace("= ", "");
    setStore("display", value);
    setStore("inputs", value);
  }
}

createComputed(async () => {
  localStorage.setItem("theme", store.theme);
  await ToggleTheme(store.theme);
});

export {
  initInputs,
  initResult,
  initDisplay,
  store,
  setStore,
  toggleParentheses,
  equals,
};
