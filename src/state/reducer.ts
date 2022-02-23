import ActionType from "./Action.type";
import actionTypes from "./actionTypes";
import StateType from "./State.type";

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
      console.log(`call is action with type : ${actionTypes.setLayout}`);

      newState = {
        layout: layoutData.map((layoutItem: any) => {
          state.layout.map((item) => {
            if (layoutItem.i === item.i) {
              layoutItem = {
                ...item,
                x: layoutItem.x,
                y: layoutItem.y,
              };
              return layoutItem;
            }
          });
          return layoutItem;
        }),
      };
      break;
  }
  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
}

export default reducer;
// newState = {
//   // ...state.layout,
//   layout: state.layout.map((item, index) => {
//     // const newLayout = locationData.map((layoutItem: any) => {
//     //   if (layoutItem.i === item.i) {
//     //     item = {
//     //       ...item,
//     //       x: layoutItem.x,
//     //       y: layoutItem.y,
//     //     };
//     //   }
//     //   return item;
//     // });
//     // // item = newLayout
//     // return item;

//     locationData.map((layoutItem: any) => {
//       if (layoutItem.i === item.i) {
//         console.log(item, item.i);
//         console.log(layoutItem, layoutItem.i);

//         return {
//           ...item,
//           x: layoutItem.x,
//           y: layoutItem.y,
//         };
//       }
//       return layoutItem;
//     });
//     item = locationData[index].i === item.i ? locationData[index] : item;

//     return item;
//   }),
// };
