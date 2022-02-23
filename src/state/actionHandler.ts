import actionTypes from "./actionTypes";
import ActionType from "./Action.type";
import StateType, { Item } from "./State.type";
import { Layout } from "react-grid-layout";

const setInitState = (state: StateType): ActionType => ({
  type: actionTypes.initState,
  payload: state,
});

const addItem = (item: Item): ActionType => ({
  type: actionTypes.addItem,
  payload: item,
});

const deleteItem = (id: string): ActionType => ({
  type: actionTypes.deleteItem,
  payload: id,
});

const setLayout = (layout: Layout[]): ActionType => ({
  type: actionTypes.setLayout,
  payload: layout,
});

export { setInitState, addItem, deleteItem, setLayout };
