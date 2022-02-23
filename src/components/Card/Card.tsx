import { Item } from "./../../state/State.type";
import { AiFillDelete } from "react-icons/ai";
import useAppState from "../../state/useAppState";
import { deleteItem } from "../../state/actionHandler";
import "./card.scss";
type CardProps = Item;

export default function Card({ i }: CardProps) {
  const { dispatch } = useAppState();

  const handleDeleteItem = () => {
    dispatch(deleteItem(i));
  };

  return (
    <section className="card-container" key={i}>
      <AiFillDelete onClick={handleDeleteItem} />
      <strong>User {i}</strong>
    </section>
  );
}
