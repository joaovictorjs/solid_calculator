import styles from "./styles.module.css";
import { setState, state } from "../../store/calculator_store";
import { createComputed } from "solid-js";

export default function Display() {
  createComputed(() => {
    try {
      setState("result", `= ${eval(state.inputs.toString())}`);
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
