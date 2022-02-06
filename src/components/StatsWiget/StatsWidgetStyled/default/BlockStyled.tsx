import BlockRow from "../../types/StyledCards/BlockRow";
import CardBlock from "../../types/StyledCards/CardBlock";
import { blockContentStyle, blockRowStyle } from "./styles/block";
import StyleFromTags from "./styles/styleFromTags";
import styled from "styled-components";

function BlockStyled({ block }: { block: CardBlock }) {
  const style = { ...block.style };

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
  const style = { ...row.style, ...blockRowStyle };

  return (
    <div
      className="flex flex-row w-full"
      data-element="BlockRowStyled"
      style={style}
    >
      {row.content.map((content) => {
        const style = { ...blockContentStyle, ...StyleFromTags(content.tags) };

        let body = content.content;
        if (content.isLocalized) {
          body = "label";
        }

        return (
          <div
            data-element="BlockRowStyled-content"
            key={`card-row-block-row-content-${Date.now()}-${
              Math.random() * Date.now()
            }`}
          >
            {body}
          </div>
        );
      })}
    </div>
  );
}

export default BlockStyled;
