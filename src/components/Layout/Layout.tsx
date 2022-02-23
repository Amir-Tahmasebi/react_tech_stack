import GridLayout, { Layout } from "react-grid-layout";
import useAppState from "./../../state/useAppState";
import { Item } from "./../../state/State.type";
import AddButton from "../AddButton";
import { deleteItem, setLayout } from "../../state/actionHandler";
import { AiFillDelete } from "react-icons/ai";
import "./layout.scss";
import { useState } from "react";

export default function ListItem() {
  const { state, dispatch } = useAppState();
  const [isSetlayout, setIsSetlayout] = useState<boolean>(false);
  const handleDeleteItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const renderItems = state.layout.map((item: Item) => (
    <section className="card-container" key={item.i}>
      <AiFillDelete
        className="card-icon"
        onClick={() => handleDeleteItem(item.i)}
      />
      <p>User {item.count}</p>
    </section>
  ));
  const onLayoutChange = (layout: Layout[]) => {
    layout.map((item) => {
      if (item.x !== 0 || item.y !== 0) {
        setIsSetlayout(true);
      }
    });
    if (isSetlayout) {
      dispatch(setLayout(layout));
    }
  };

  return (
    <section className="layout-container">
      <h1>Test</h1>
      <div className="layout-wrapper">
        <GridLayout
          className="layout"
          layout={state.layout}
          cols={6}
          rowHeight={100}
          width={1200}
          onLayoutChange={onLayoutChange}
        >
          {renderItems}
        </GridLayout>
      </div>
      {state.layout.length < 12 && <AddButton />}
    </section>
  );
}
