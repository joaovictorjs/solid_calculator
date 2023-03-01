import {
  store,
  setStore,
  initDisplay,
  initInputs,
  toggleParentheses,
} from "../../stores/calculator_store";
import half from "../../assets/icons/half.svg";
import halfDark from "../../assets/icons/half_dark.svg";
import backspace from "../../assets/icons/backspace.svg";
import backspaceDark from "../../assets/icons/backspace_dark.svg";
import styles from "./styles.module.css";

const deleteLast = () => {
  const actual = store.inputs[store.inputs.length - 1];

  if (actual === "(" || actual === ")") {
    toggleParentheses();
  }

  setStore("inputs", (prev) => {
    if (prev.length === 1) return initInputs;
    return prev.slice(0, prev.length - 1);
  });

  setStore("display", (prev) => {
    if (prev.length === 1) return initDisplay;
    return prev.slice(0, prev.length - 1);
  });
};

export default function QuickBar() {
  const themeIcon = () => {
    return store.theme.includes("dark") ? halfDark : half;
  };

  const backspaceIcon = () => {
    return store.theme.includes("dark") ? backspaceDark : backspace;
  };

  const toggleTheme = () => {
    setStore("theme", (prev) => (prev.includes("light") ? "dark" : "light"));
  };

  return (
    <>
      <div
        classList={{
          [styles.bar]: true,
          [styles.dark]: store.theme.includes("dark"),
        }}
        children={() => (
          <>
            <button
              onClick={() => toggleTheme()}
              classList={{
                [styles.btn]: true,
                [styles.theme]: true,
                [styles.dark]: store.theme.includes("dark"),
              }}
              children={() => <img src={themeIcon()} alt="theme button" />}
            />

            <button
              classList={{
                [styles.btn]: true,
                [styles.back]: true,
                [styles.dark]: store.theme.includes("dark"),
              }}
              children={() => (
                <img src={backspaceIcon()} alt="backspace button" />
              )}
              onClick={() => deleteLast()}
            />
          </>
        )}
      />
    </>
  );
}

export { deleteLast };
