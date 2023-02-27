import { state } from "../../store/calculator_store";
import Display from "../display";
import QuickAccessBar from "../quick_access_bar";
import styles from "./styles.module.css";
import { CopyToClipboard } from "../../../wailsjs/go/main/App";

export default function Prompt() {
  function copy() {
    CopyToClipboard(state.result.replaceAll("= ", "")).then(() => {});
  }

  return (
    <>
      <div onClick={() => copy()} class={styles.prompt}>
        <Display />
        <QuickAccessBar />
      </div>
    </>
  );
}
