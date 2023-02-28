import "./styles.css";
import { render } from "solid-js/web";
import App from "./app/App";
import { WindowSetSize } from "../wailsjs/runtime/runtime";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const [tgHeight, tgWidth] = [470, 260];
    const [acHeight, acWidth] = [window.outerHeight, window.outerWidth];
    const [diffHeight, diffWidth] = [tgHeight - acHeight, tgWidth - acWidth];
    WindowSetSize(acWidth + diffWidth, acHeight + diffHeight);
  },
  { once: true }
);

render(App, document.querySelector(".root"));
