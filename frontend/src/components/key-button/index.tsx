import Key from "../../models/key";
import { store } from "../../stores/calculator_store";
import styles from "./styles.module.css";

export default function KeyButton(key: Key) {
  return (
    <>
      <button
        classList={{
          [styles.button]: true,
          [styles.operation]: key.type.includes("operation"),
          [styles.dark]: store.theme.includes("dark"),
        }}
        style={{
          "grid-column": "span " + key.span,
        }}
        textContent={key.text}
        onClick={() => key.click()}
      ></button>
    </>
  );
}
