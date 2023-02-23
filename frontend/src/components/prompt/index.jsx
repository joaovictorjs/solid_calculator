import styles from "./styles.module.css";
import { result, input } from "../../stores/calculator";

export default function Prompt() {
  return (
    <>
      <div class={styles.prompt}>
        <p class={styles.result}>{result()}</p>
        <p class={styles.input}>{input()}</p>
      </div>
    </>
  );
}
