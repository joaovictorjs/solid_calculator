import { store } from '../../stores/calculator_store';
import styles from './styles.module.css';
import QuickBar from '../quick-bar/index';

export default function Display() {
  return (
    <>
      <div
        classList={{
          [styles.display]: true,
          [styles.dark]: store.theme.includes('dark'),
        }}
        children={() => (
          <>
            <div classList={{ [styles.wrapper]: true }}></div>
            <QuickBar />
          </>
        )}
      />
    </>
  );
}
