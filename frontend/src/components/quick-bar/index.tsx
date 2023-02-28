import styles from "./styles.module.css";
import backspace from "../../assets/icons/backspace.svg";
import half from "../../assets/icons/half.svg";
import halfIdle from "../../assets/icons/half_idle.svg";
import halfDark from "../../assets/icons/half_dark.svg";
import { createSignal } from "solid-js";
import { setStore, store } from "../../stores/calculator_store";
export default function QuickBar() {
  const [hover, setHover] = createSignal(false);

  const themeIcon = () =>
    hover() ? (store.theme.includes("dark") ? halfDark : half) : halfIdle;

  const toggleTheme = () => {
    setStore("theme", (prev) => (prev.includes("light") ? "dark" : "light"));
  };

  return (
    <>
      <div classList={{ [styles.bar]: true }}>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          classList={{
            [styles.themebtn]: true,
            [styles.dark]: store.theme.includes("dark"),
          }}
          onClick={() => toggleTheme()}
          children={() => <img src={themeIcon()} alt="theme button" />}
        />

        <button
          classList={{
            [styles.dark]: store.theme.includes("dark"),
          }}
        >
          <img src={backspace} alt="backspace button" />
        </button>
      </div>
    </>
  );
}
