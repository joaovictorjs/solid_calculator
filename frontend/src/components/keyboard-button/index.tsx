import Key from '../../models/key';
import { store } from '../../stores/calculator_store';
import styles from './styles.module.css';

export default function KeyboardButton(key: Key) {
  return (
    <>
      <button
        classList={{
          [styles.btn]: true,
          [styles.opt]: key.type.includes('operation'),
          [styles.dark]: store.theme.includes('dark'),
        }}
        style={{
          'grid-column': `span ${key.span}`,
        }}
        onClick={() => key.click()}
        textContent={key.text}
      />
    </>
  );
}
