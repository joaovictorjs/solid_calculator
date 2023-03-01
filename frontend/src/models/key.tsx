export default interface Key {
  text: string;
  value: string;
  span: number;
  type: string;
  click: () => void;
}
