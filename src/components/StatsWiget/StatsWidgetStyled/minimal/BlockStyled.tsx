import styled from "styled-components";

import BlockRow from "../../types/BlockRow";
import CardBlock from "../../types/CardBlock";
import { blockContentStyle, blockRowStyle, blockStyle } from "./styles/block";
import StyleFromTags from "./styles/styleFromTags";
import PropsWithTags from "../../types/PropsWithTags";

const BlockDiv = styled.div<PropsWithTags>`
  ${blockStyle}
  ${(p) => StyleFromTags(p.tags)}
`;

function BlockStyled({ block }: { block: CardBlock }) {
  return (
    <BlockDiv
      tags={block.tags}
      className="flex flex-col w-full"
      data-element="BlockStyled"
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
    </BlockDiv>
  );
}

const BlockRowDiv = styled.div`
  ${blockRowStyle}
`;
const BlockContentDiv = styled.div<PropsWithTags>`
  ${blockContentStyle}
  ${(p) => StyleFromTags(p.tags)}
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
            tags={content.tags}
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
