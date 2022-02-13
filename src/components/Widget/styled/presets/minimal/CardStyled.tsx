// Libraries
import styled from "styled-components";
// Types
import Card from "../../../core/types/Card";
import CardRow from "../../../core/types/CardRow";
import StyledPropsWithTags from "../../../core/types/StyledPropsWithTags";
// Styles
import styleFromTags from "./styles/styleFromTags";
import { cardRowStyle, cardStyle } from "./styles/card";
// Components
import BlockStyled from "./BlockStyled";

const CardDiv = styled.div<StyledPropsWithTags>`
  ${cardStyle}
  ${(p) => styleFromTags(p.tags)}
`;

function CardStyled({ card }: { card: Card }) {
  return (
    <CardDiv
      tags={card.tags}
      className="flex flex-col w-full gap-1"
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
  const middle = [Math.floor(row.blocks.length / 2)];
  if (row.blocks.length % 2 === 0) {
    middle.push(Math.floor(row.blocks.length / 2) - 1);
  }
  return (
    <CardRowDiv
      className="flex flex-row w-full gap-1"
      data-element="CardRowStyled"
    >
      {row.blocks.map((block, i) => {
        if (
          row.blocks.length > 2 &&
          middle.includes(i) &&
          !block.tags.includes("label")
        ) {
          if (!block.tags) block.tags = [];
          block.tags.push("highlight");
        }
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
