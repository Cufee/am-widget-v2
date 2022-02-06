import styled from "styled-components";

import BlockRow from "../../types/BlockRow";
import CardBlock from "../../types/CardBlock";
import { blockContentStyle, blockRowStyle, blockStyle } from "./styles/block";
import StyleFromTags from "./styles/styleFromTags";

function BlockStyled({ block }: { block: CardBlock }) {
  const BlockDiv = styled.div`
    ${blockStyle}
    ${StyleFromTags(block.tags)}
  `;

  return (
    <BlockDiv className="flex flex-col w-full" data-element="BlockStyled">
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
    </BlockDiv>
  );
}

const BlockRowDiv = styled.div`
  ${blockRowStyle}
`;
const BlockContentDiv = styled.div`
  ${blockContentStyle}
`;

function BlockRowStyled({ row }: { row: BlockRow }) {
  return (
    <BlockRowDiv className="flex flex-row w-full" data-element="BlockRowStyled">
      {row.content.map((content) => {
        let body = content.content;
        if (content.isLocalized) {
          // do something
        }

        return (
          <BlockContentDiv
            data-element="BlockRowStyled-content"
            key={`card-row-block-row-content-${Date.now()}-${
              Math.random() * Date.now()
            }`}
          >
            {body}
          </BlockContentDiv>
        );
      })}
    </BlockRowDiv>
  );
}

export default BlockStyled;
