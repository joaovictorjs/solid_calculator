import { store } from "../../stores/calculator_store";
import QuickBar from "../quick-bar";
import styles from "./styles.module.css";

export default function Display() {
  return (
    <>
      <div
        classList={{
          [styles.display]: true,
          [styles.dark]: store.theme.includes("dark"),
        }}
      >
        <div classList={{ [styles.wrapper]: true }}>
          <p classList={{ [styles.result]: true }}>{"= 0"}</p>
          <p classList={{ [styles.inputs]: true }}>{"0+0"}</p>
        </div>
        <QuickBar />
      </div>
    </>
  );
}
