import styles from "./styles.module.css";
import { setState, state } from "../../store/calculator_store";
import { createComputed } from "solid-js";

export default function Display() {
  createComputed(() => {
    try {
      let result = eval(state.inputs.toString());

      if (result.toString().includes(".")) {
        const lenght = result.toString().split(".")[1].length;
        result = parseFloat(result).toFixed(lenght > 1 ? 2 : 1);
      }

      setState("result", `= ${result}`);
    } catch (e) {}
  });
  return (
    <>
      <div class={styles.display}>
        <p class={styles.result}>{state.result.toString()}</p>
        <p class={styles.inputs}>{state.display.toString()}</p>
      </div>
    </>
  );
}
