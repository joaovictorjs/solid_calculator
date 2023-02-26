import Display from '../display';
import QuickAccessBar from '../quick_access_bar';
import styles from './styles.module.css';

export default function Prompt() {
  return (
    <>
      <div class={styles.prompt}>
        <Display />
        <QuickAccessBar />
      </div>
    </>
  );
}
