import KeyType from './key_type';
class Key {
  text: String;
  value: String;
  span: number;
  type: KeyType;

  public constructor(
    text: String,
    value: String = text,
    span: number = 1,
    type: KeyType = KeyType.Numeric
  ) {
    this.text = text;
    this.value = value;
    this.span = span;
    this.type = type;
  }
}

const keys: Key[] = [
  //line 1
  new Key('CE', 'clear', 2, KeyType.Operation),
  new Key('(', '(', 1, KeyType.Operation),
  new Key('÷', '/', 1, KeyType.Operation),

  //line 2
  new Key('7'),
  new Key('8'),
  new Key('9'),
  new Key('×', '*', 1, KeyType.Operation),

  //line 3
  new Key('4'),
  new Key('5'),
  new Key('6'),
  new Key('-', '-', 1, KeyType.Operation),

  //line 4
  new Key('1'),
  new Key('2'),
  new Key('3'),
  new Key('+', '+', 1, KeyType.Operation),

  //line 5
  new Key(',', '.'),
  new Key('0'),
  new Key('=', 'equals', 2, KeyType.Operation),
];

export { Key, keys };
