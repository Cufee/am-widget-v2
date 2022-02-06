import BlockRow from "../../types/StyledCards/BlockRow";
import CardBlock from "../../types/StyledCards/CardBlock";
import { minimalBlockContentStyle, minimalBlockRowStyle } from "./styles/block";
import StyleFromTags from "./styles/styleFromTags";
import styled from "styled-components";

function BlockStyled({ block }: { block: CardBlock }) {
  const style = { ...StyleFromTags(block.tags) };

  return (
    <div
      className="flex flex-col w-full"
      data-element="BlockStyled"
      style={style}
    >
      {block.rows.map((row) => {
        return (
          <BlockRowStyled
            row={row}
            key={`card-row-block-row-${Date.now()}-${
              Math.random() * Date.now()
            }`}
          />
        );
      })}
    </div>
  );
}

function BlockRowStyled({ row }: { row: BlockRow }) {
  const style = { ...row.style, ...minimalBlockRowStyle };

  return (
    <style
      className="flex flex-row w-full"
      data-element="BlockRowStyled"
      style={style}
    >
      {row.content.map((content) => {
        const style = {
          ...minimalBlockContentStyle,
          ...StyleFromTags(content.tags),
        };

        let body = content.content;
        if (content.isLocalized) {
          // do something
        }

        return (
          <div
            style={style}
            data-element="BlockRowStyled-content"
            key={`card-row-block-row-content-${Date.now()}-${
              Math.random() * Date.now()
            }`}
          >
            {body}
          </div>
        );
      })}
    </style>
  );
}

export default BlockStyled;
