export type Item = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  count: number;
};
type StateType = {
  layout: Item[];
};

export default StateType;
