import { createStore } from "solid-js/store";
import { CalculatorStore } from "../models/calculator_store";

const [state, setState] = createStore(new CalculatorStore());

export { state, setState };
