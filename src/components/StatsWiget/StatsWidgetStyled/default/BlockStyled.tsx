import BlockRow from "../../types/BlockRow";

import { blockContentStyle, blockRowStyle } from "./styles/block";
import StyleFromTags from "./styles/styleFromTags";
import styled from "styled-components";
import CardBlock from "../../types/CardBlock";

function BlockStyled({ block }: { block: CardBlock }) {
  const BlockDiv = styled.div`
    ${StyleFromTags(block.tags)}}
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

function BlockRowStyled({ row }: { row: BlockRow }) {
  return (
    <BlockRowDiv className="flex flex-row w-full" data-element="BlockRowStyled">
      {row.content.map((content) => {
        const ContentDiv = styled.div`
          ${blockContentStyle}
          ${StyleFromTags(content.tags)}
        `;

        let body = content.content;
        if (content.isLocalized) {
          body = "label";
        }

        return (
          <ContentDiv
            data-element="BlockRowStyled-content"
            key={`card-row-block-row-content-${Date.now()}-${
              Math.random() * Date.now()
            }`}
          >
            {body}
          </ContentDiv>
        );
      })}
    </BlockRowDiv>
  );
}

export default BlockStyled;
