import Key from "./key";
export interface CalculatorStore {
  inputs: string;
  display: string;
  result: string;
  theme: string;
  keys: Key[];
}
