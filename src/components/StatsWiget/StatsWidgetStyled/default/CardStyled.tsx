import BlockStyled from "./BlockStyled";
import { cardRowStyle, cardStyle } from "./styles/card";
import styled from "styled-components";
import Card from "../../types/Card";
import CardRow from "../../types/CardRow";
import StyleFromTags from "./styles/styleFromTags";

function CardStyled({ card }: { card: Card }) {
  const CardDiv = styled.div`
    ${cardStyle}
    ${StyleFromTags(card.tags)}
  `;

  return (
    <CardDiv className="flex flex-col w-full" data-element="CardStyled">
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
      className="flex flex-row w-full gap-4 px-4"
      data-element="CardRowStyled"
    >
      {row.blocks.map((block) => {
        return (
          <BlockStyled
            block={block}
            key={`card-row-block-${Date.now()}-${Math.random() * Date.now()}`}
          />
        );
      })}
    </CardRowDiv>
  );
}

export default CardStyled;
