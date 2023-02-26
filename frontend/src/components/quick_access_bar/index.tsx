import styles from './styles.module.css';
import backspace from '../../assets/icons/backspace.svg';
import { deleteLast } from '../../stores/calculator_store';

export default function QuickAccessBar() {
  return (
    <>
      <div class={styles.qabar}>
        <button class={styles.backspace} onClick={() => deleteLast()}>
          <img class={styles.icon} src={backspace} alt="backspace" />
        </button>
      </div>
    </>
  );
}
