import "./styles.css";
import { render } from "solid-js/web";
import App from "./app/App";
import { WindowSetMaxSize, WindowSetMinSize } from "../wailsjs/runtime/runtime";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const [targetH, targetW] = [470, 260];
    const [height, width] = [window.outerHeight, window.outerWidth];
    const [diffH, diffW] = [targetH - height, targetW - width];
    WindowSetMaxSize(targetW + diffW, targetH + diffH);
    WindowSetMinSize(targetW + diffW, targetH + diffH);
  },
  { once: true }
);

render(App, document.querySelector(".root") as Element);
