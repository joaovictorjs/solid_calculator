import { For } from 'solid-js';
import styles from './styles.module.css';
import { keys } from '../../models/key';
import KeyboardButton from '../keyboard_button';

export default function Keyboard() {
  return (
    <>
      <div class={styles.keyboard}>
        <For
          each={keys}
          children={(key) => {
            return <KeyboardButton {...key} />;
          }}
        />
      </div>
    </>
  );
}
