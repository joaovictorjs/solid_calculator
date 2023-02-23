import styles from "./styles.module.css";
import { handleClick } from "../../stores/calculator";

export default function Key(props) {
  let width = "50px";

  if (props.span > 1) {
    width = 50 * props.span + (props.span - 1) * 5 + "px";
  }

  return (
    <>
      <button
        class={styles.key}
        style={{
          "grid-column": "span " + props.span,
          height: "50px",
          width: width,
          "background-color": props.color,
        }}
        textContent={props.text}
        onClick={() => handleClick(props.value)}
      />
    </>
  );
}
