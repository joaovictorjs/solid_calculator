import { For } from "solid-js";
import { store } from "../../stores/calculator_store";
import KeyButton from "../key-button";
import styles from "./styles.module.css";

export default function Keyboard() {
  return (
    <>
      <div
        classList={{
          [styles.keyboard]: true,
          [styles.dark]: store.theme.includes("dark"),
        }}
      >
        <For each={store.keys} children={(k) => <KeyButton {...k} />} />
      </div>
    </>
  );
}
