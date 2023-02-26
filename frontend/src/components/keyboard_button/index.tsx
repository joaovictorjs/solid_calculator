import { Key } from '../../models/key';
import KeyType from '../../models/key_type';
import './styles.css';
import { handleClick, clearAll } from '../../stores/calculator_store';

export default function KeyboardButton(key: Key) {
  return (
    <>
      <div
        classList={{
          background: true,
          operation: key.type === KeyType.Operation,
        }}
        style={{
          'grid-column': `span ${key.span}`,
        }}
      >
        <button
          classList={{ kb_button: true }}
          textContent={key.text.toString()}
          onClick={() => handleClick(key)}
        />
      </div>
    </>
  );
}
