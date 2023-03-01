import Keyboard from "../components/keyboard";
import Display from "../components/display/index";
import { deleteLast } from "../components/quick-bar";
import { equals, store } from "../stores/calculator_store";
import { CopyToClipboard } from "../../wailsjs/go/main/App";

export default function App() {
  document.addEventListener("keydown", async (event) => {
    if (event.keyCode === 9) {
      event.preventDefault();
      return;
    }

    if (event.ctrlKey && event.key === "c") {
      await CopyToClipboard(store.result.replace("= ", ""));
      return;
    }

    if (event.key.includes("Enter")) {
      equals();
      return;
    }

    if (event.key.includes("Backspace")) {
      deleteLast();
      return;
    }

    store.keys.forEach((key) => {
      if (key.shortcut === event.key) {
        key.click();
        return;
      }
    });
  });

  return (
    <>
      <Display />
      <Keyboard />
    </>
  );
}
