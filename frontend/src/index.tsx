import "./styles.css";
import { render } from "solid-js/web";
import App from "./app/App";

const root = document.querySelector(".root") as Element;

render(App, root);
