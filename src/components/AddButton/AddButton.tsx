import { addItem } from "./../../state/actionHandler";
import useAppState from "./../../state/useAppState";
import { v4 as uuid } from "uuid";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";

export default function AddButton() {
  const { state, dispatch } = useAppState();
  const [x, setX] = useState<number>(0);
  const [count, setCount] = useState<number>(
    state.layout[state.layout.length - 1].count + 1
  );
  const addItemHandler = () => {
    setCount(count + 1);
    if (state.layout.length < 12) {
      if (state.layout.length > 6) {
        setX((prev) => prev + 1);
      }
      dispatch(
        addItem({
          i: uuid(),
          x: state.layout.length <= 6 ? state.layout.length : x,
          y: state.layout.length <= 6 ? 0 : 1,
          w: 1,
          h: 1,
          count,
        })
      );
    }
  };

  return <IoMdAddCircle className="add-button" onClick={addItemHandler} />;
}
