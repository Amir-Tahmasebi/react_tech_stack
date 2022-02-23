import ActionType from "./Action.type";
import actionTypes from "./actionTypes";
import StateType from "./State.type";
import { Layout } from "react-grid-layout";

function reducer(state: StateType, action: ActionType): StateType {
  let newState: StateType = state;
  switch (action.type) {
    case actionTypes.initState:
      newState = action.payload;
      break;
    case actionTypes.addItem:
      const newItem = action.payload;
      newState = {
        layout: [...state.layout, newItem],
      };
      break;
    case actionTypes.deleteItem:
      newState = {
        layout: state.layout.filter((item) => item.i !== action.payload),
      };
      break;
     
      case actionTypes.setLayout:
      const layoutData = action.payload;
      newState = {
        layout: state.layout.map((item) => {
          if (layoutData.i === item.i && layoutData.y <= 2) {
            return {
              ...item,
              x: layoutData.x,
              y: layoutData.y,
            };
          }
          return item;
        }),
      };
      
      break;
  }
  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
}

export default reducer;

