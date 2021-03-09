import { Monster } from "../../App";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export interface CardListProps {
  monsters: Monster[];
}

export const CardList = (props: CardListProps)  => {
  return (
    <div className="card-list">
      {props.monsters.map((_) => (
        <Card key={_.id} monster={_} />
      ))}
    </div>
  );
};
