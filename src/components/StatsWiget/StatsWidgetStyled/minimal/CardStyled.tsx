import Card from "../../types/StyledCards/Card";
import CardRow from "../../types/StyledCards/CardRow";
import BlockStyled from "./BlockStyled";
import StyleFromTags from "./styles/styleFromTags";
import styled from "styled-components";
import { minimalCardRowStyle, minimalCardStyle } from "./styles/card";

function CardStyled({ card }: { card: Card }) {
  const style = {
    ...card.style,
    ...minimalCardStyle,
    ...StyleFromTags(card.tags),
  };

  return (
    <div
      className="flex flex-col w-full"
      data-element="CardStyled"
      style={style}
    >
      {card.rows.map((row) => {
        return (
          <CardRowStyled
            row={row}
            key={`card-row-${Date.now()}-${Math.random() * Date.now()}`}
          />
        );
      })}
    </div>
  );
}

function CardRowStyled({ row }: { row: CardRow }) {
  const style = { ...row.style, ...minimalCardRowStyle };

  return (
    <div
      className="flex flex-row w-full gap-1"
      data-element="CardRowStyled"
      style={style}
    >
      {row.blocks.map((block) => {
        return (
          <BlockStyled
            block={block}
            key={`card-row-block-${Date.now()}-${Math.random() * Date.now()}`}
          />
        );
      })}
    </div>
  );
}

export default CardStyled;
