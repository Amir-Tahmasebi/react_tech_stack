import GridLayout, { Layout } from "react-grid-layout";
import useAppState from "./../../state/useAppState";
import { Item } from "./../../state/State.type";
import AddButton from "../AddButton";
import { deleteItem, setLayout } from "../../state/actionHandler";
import { AiFillDelete } from "react-icons/ai";
import "./layout.scss";

export default function ListItem() {
  const { state, dispatch } = useAppState();
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
  const onDragStop = (items: Layout[], prev: Layout, after: Layout) => {
    dispatch(setLayout(after));
  };

  return (
    <section className="layout-container">
      <h1>Test</h1>
      <div className="layout-wrapper">
        <GridLayout
          className="layout"
          layout={state.layout}
          cols={6}
          rowHeight={80}
          width={1200}
          // onLayoutChange={onLayoutChange}
          maxRows={2}
          onDragStop={onDragStop}
        >
          {renderItems}
        </GridLayout>
      </div>
      {state.layout.length < 12 && <AddButton />}
    </section>
  );
}
