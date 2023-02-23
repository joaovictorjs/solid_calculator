import { For } from "solid-js";
import { keys } from "../../stores/calculator";
import Key from "../key";
import styles from "./styles.module.css";

export default function Keyboard() {
  return (
    <>
      <div class={styles.keyboard}>
        <For each={keys} children={(key) => <Key {...key} />} />
      </div>
    </>
  );
}
