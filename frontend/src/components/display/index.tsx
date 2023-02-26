import styles from './styles.module.css';
import { state } from '../../stores/calculator_store';

export default function Display() {
  return (
    <>
      <div class={styles.display}>
        <p class={styles.result}>{state.result.toString()}</p>
        <p class={styles.inputs}>{state.display.toString()}</p>
      </div>
    </>
  );
}
