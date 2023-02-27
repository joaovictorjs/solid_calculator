import { Key } from "../../models/key";
import KeyType from "../../models/key_type";
import { setState, state } from "../../store/calculator_store";
import { initDisplay, initInputs } from "../../models/calculator_store";
import "./styles.css";
import { createComputed, createSignal, Show } from "solid-js";

export default function KeyboardButton(key: Key) {
  const [getKey, setKey] = createSignal(key);

  function onClick() {
    setState("inputs", (prev) => {
      if (getKey().value === "clear") {
        setState("parenthesis", "(");
        return initInputs;
      }
      if (prev === initInputs) return getKey().value;
      return prev.concat(getKey().value.toString());
    });

    setState("display", (prev) => {
      if (getKey().value === "clear") {
        return initDisplay;
      }
      if (prev === initInputs) return getKey().text;
      return prev.concat(getKey().text.toString());
    });

    if (key.value === "(") {
      setState("parenthesis", (prev) => {
        if (prev === "(") return ")";
        return "(";
      });
    }
  }

  createComputed(() => {
    if (key.value === "(") {
      setKey(
        new Key(state.parenthesis, state.parenthesis, 1, KeyType.Operation)
      );
    }
  });

  return (
    <>
      <div
        classList={{
          background: true,
          operation: getKey().type === KeyType.Operation,
        }}
        style={{
          "grid-column": `span ${getKey().span}`,
        }}
      >
        <button
          classList={{ kb_button: true }}
          textContent={getKey().text.toString()}
          onClick={() => onClick()}
        />

        {/* <Show
          when={keyState().value === ")"}
          children={() => {
            return <div classList={{ badge: true }}></div>;
          }}
        /> */}
      </div>
    </>
  );
}
