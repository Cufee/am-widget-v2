// Libraries
import styled from "styled-components";
// Types
import Card from "../../../core/types/Card";
import CardRow from "../../../core/types/CardRow";
import PropsWithTags from "../../../core/types/StyledPropsWithTags";
// Styles
import CardBlockStyled from "./CardBlock";
import styleFromTags from "./styles/styleFromTags";
import { cardRowStyle, cardStyle } from "./styles/card";

const CardDiv = styled.div<PropsWithTags>`
  ${cardStyle}
  ${(p) => styleFromTags(p.tags)}
`;

function CardStyled({ card }: { card: Card }) {
  return (
    <CardDiv
      tags={card.tags}
      className="flex flex-col"
      data-element="CardStyled"
    >
      {card.rows.map((row) => {
        return (
          <CardRowStyled
            row={row}
            key={`card-row-${Date.now()}-${Math.random() * Date.now()}`}
          />
        );
      })}
    </CardDiv>
  );
}

const CardRowDiv = styled.div`
  ${cardRowStyle}
`;

function CardRowStyled({ row }: { row: CardRow }) {
  return (
    <CardRowDiv
      className="flex flex-row gap-4 px-4"
      data-element="CardRowStyled"
    >
      {row.blocks.map((block) => {
        return (
          <CardBlockStyled
            block={block}
            key={`card-row-block-${Date.now()}-${Math.random() * Date.now()}`}
          />
        );
      })}
    </CardRowDiv>
  );
}

export default CardStyled;
