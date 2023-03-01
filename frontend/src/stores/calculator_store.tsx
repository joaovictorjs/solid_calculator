import { createStore } from 'solid-js/store';
import Key from '../models/key';
const [initInputs, initResult, initDisplay] = ['0+0', '= 0', '0+0'];
const [store, setStore] = createStore({
  inputs: initInputs,
  result: initResult,
  display: initDisplay,
  theme: 'light',
  keys: [
    //line 0
    { text: 'CE', value: 'clear', span: 2, type: 'operation', click: () => {} },
    {
      text: '(',
      value: 'parenthesis',
      span: 1,
      type: 'operation',
      click: () => {},
    },
    { text: '÷', value: '/', span: 1, type: 'operation', click: () => {} },

    //line 1
    { text: '7', value: '7', span: 1, type: 'numeric', click: () => {} },
    { text: '8', value: '8', span: 1, type: 'numeric', click: () => {} },
    { text: '9', value: '9', span: 1, type: 'numeric', click: () => {} },
    { text: '×', value: '*', span: 1, type: 'operation', click: () => {} },

    //line 2
    { text: '4', value: '4', span: 1, type: 'numeric', click: () => {} },
    { text: '5', value: '5', span: 1, type: 'numeric', click: () => {} },
    { text: '6', value: '6', span: 1, type: 'numeric', click: () => {} },
    { text: '-', value: '-', span: 1, type: 'operation', click: () => {} },

    //line 3
    { text: '1', value: '1', span: 1, type: 'numeric', click: () => {} },
    { text: '2', value: '2', span: 1, type: 'numeric', click: () => {} },
    { text: '3', value: '3', span: 1, type: 'numeric', click: () => {} },
    { text: '+', value: '+', span: 1, type: 'operation', click: () => {} },

    //line 4
    { text: ',', value: '.', span: 1, type: 'numeric', click: () => {} },
    { text: '0', value: '0', span: 1, type: 'numeric', click: () => {} },
    { text: '=', value: 'equals', span: 2, type: 'operation', click: () => {} },
  ],
});

export { initInputs, initResult, initDisplay, store, setStore };
