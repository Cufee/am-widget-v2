import BlockStyled from "./BlockStyled";
import StyleFromTags from "./styles/styleFromTags";
import styled from "styled-components";
import { cardRowStyle, cardStyle } from "./styles/card";
import CardRow from "../../types/CardRow";
import Card from "../../types/Card";
import PropsWithTags from "../../types/PropsWithTags";

const CardDiv = styled.div<PropsWithTags>`
  ${cardStyle}
  ${(p) => StyleFromTags(p.tags)}
`;

function CardStyled({ card }: { card: Card }) {
  return (
    <CardDiv
      tags={card.tags}
      className="flex flex-col w-full"
      data-element="CardStyled"
    >
      {card.rows.map((row: CardRow) => {
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
      className="flex flex-row w-full gap-1"
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
