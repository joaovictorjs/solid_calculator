import { For } from "solid-js";
import styles from "./styles.module.css";
import { store } from "../../stores/calculator_store";
import KeyboardButton from "../keyboard-button";

export default function Keyboard() {
  return (
    <>
      <div
        classList={{
          [styles.kb]: true,
          [styles.dark]: store.theme.includes("dark"),
        }}
        children={() => (
          <For
            each={store.keys}
            children={(key) => <KeyboardButton {...key} />}
          />
        )}
      />
    </>
  );
}
