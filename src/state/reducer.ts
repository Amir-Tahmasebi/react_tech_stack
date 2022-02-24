import ActionType from "./Action.type";
import actionTypes from "./actionTypes";
import StateType from "./State.type";
import initState from "./initState";

function reducer(state: StateType = initState, action: ActionType): StateType {
  let newState: StateType = state;
  switch (action.type) {
    case actionTypes.initState:
      newState = action.payload;
      localStorage.setItem("state", JSON.stringify(newState));
      break;
    case actionTypes.addItem:
      const newItem = action.payload;
      newState = {
        layout: [...state.layout, newItem],
      };
      localStorage.setItem("state", JSON.stringify(newState));
      break;
    case actionTypes.deleteItem:
      newState = {
        layout: state.layout.filter((item) => item.i !== action.payload),
      };
      localStorage.setItem("state", JSON.stringify(newState));
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
      localStorage.setItem("state", JSON.stringify(newState));
      break;
  }
  return newState;
}

export default reducer;
