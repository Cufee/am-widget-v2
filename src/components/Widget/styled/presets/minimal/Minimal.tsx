// Types
import Card from "../../../core/types/Card";
// Components
import CardStyled from "./CardStyled";

function Minimal({ cards }: { cards: Card[] }) {
  return (
    <div className={`flex flex-col gap-1`} data-element="StatsWidgetStyled">
      {cards.map((card) => {
        return (
          <CardStyled
            card={card}
            key={`card-${Date.now()}-${Math.random() * Date.now()}`}
          />
        );
      })}
    </div>
  );
}

export default Minimal;
