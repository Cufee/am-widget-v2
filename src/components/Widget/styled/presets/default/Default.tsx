// Libraries
import styled from "styled-components";
// Types
import Card from "../../../core/types/Card";
// Components
import CardStyled from "./Card";

const StatsWidgetDiv = styled.div``;

function StatsWidgetStyled({ cards }: { cards: Card[] }) {
  return (
    <StatsWidgetDiv
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
    </StatsWidgetDiv>
  );
}

export default StatsWidgetStyled;
