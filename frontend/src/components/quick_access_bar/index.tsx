import styles from "./styles.module.css";
import backspace from "../../assets/icons/backspace.svg";
import { setState, state } from "../../store/calculator_store";
import { initDisplay, initInputs } from "../../models/calculator_store";

function action() {
  const last = state.inputs[state.inputs.length - 1];
  if (last === "(" || last === ")") {
    setState("parenthesis", last);
  }

  setState("inputs", (prev) => {
    if (prev.length === 1) return initInputs;
    return prev.slice(0, prev.length - 1);
  });

  setState("display", (prev) => {
    if (state.inputs === initInputs) return initDisplay;
    return prev.slice(0, prev.length - 1);
  });
}

export default function QuickAccessBar() {
  return (
    <>
      <div class={styles.qabar}>
        <button class={styles.backspace} onClick={() => action()}>
          <img class={styles.icon} src={backspace} alt="backspace" />
        </button>
      </div>
    </>
  );
}
