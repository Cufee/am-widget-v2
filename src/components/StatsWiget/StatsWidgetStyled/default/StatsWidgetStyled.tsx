import Card from "../../types/Card";
import CardStyled from "./CardStyled";
import styled from "styled-components";

const StatsWidgetDiv = styled.div`
  padding: 1rem;
`;

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
