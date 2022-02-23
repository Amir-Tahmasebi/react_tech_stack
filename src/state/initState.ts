import StateType from "./State.type";
import { v4 as uuid } from "uuid";

const initState: StateType = {
  layout: [
    { i: uuid(), x: 0, y: 0, w: 1, h: 1, count: 1 },
    { i: uuid(), x: 1, y: 0, w: 1, h: 1, count: 2 },
    { i: uuid(), x: 2, y: 0, w: 1, h: 1, count: 3 },
    { i: uuid(), x: 3, y: 0, w: 1, h: 1, count: 4 },
  ],
};

export default initState;