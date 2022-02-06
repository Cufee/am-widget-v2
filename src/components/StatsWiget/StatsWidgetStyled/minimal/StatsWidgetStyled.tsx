import Card from "../../types/Card";
import CardStyled from "./CardStyled";

function StatsWidgetStyled({ cards, width }: { cards: Card[]; width: string }) {
  return (
    <div
      style={{ maxWidth: width, width: "fit-content" }}
      className={`flex flex-col gap-1`}
      data-element="StatsWidgetStyled"
    >
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

export default StatsWidgetStyled;
