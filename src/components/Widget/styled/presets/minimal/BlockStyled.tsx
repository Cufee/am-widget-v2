// Libraries
import styled from "styled-components";
// Types
import BlockRow from "../../../core/types/BlockRow";
import CardBlock from "../../../core/types/CardBlock";
import StyledPropsWithTags from "../../../core/types/StyledPropsWithTags";
// Sty;es
import styleFromTags from "./styles/styleFromTags";
import { blockContentStyle, blockRowStyle, blockStyle } from "./styles/block";
// Components
import CardBlockContent from "../../../core/CardBlockContent/CardBlockContent";

const BlockDiv = styled.div<StyledPropsWithTags>`
  ${blockStyle}
  ${(p) => styleFromTags(p.tags)}
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
const BlockContentDiv = styled.div<StyledPropsWithTags>`
  ${blockContentStyle}
  ${(p) => styleFromTags(p.tags)}
`;

function BlockRowStyled({ row }: { row: BlockRow }) {
  return (
    <BlockRowDiv className="flex flex-row w-full" data-element="BlockRowStyled">
      {row.content.map((content) => {
        return (
          <BlockContentDiv
            tags={content.tags}
            data-element="BlockRowStyled-content"
            key={`card-row-block-row-content-${Date.now()}-${
              Math.random() * Date.now()
            }`}
          >
            <CardBlockContent content={content} />
          </BlockContentDiv>
        );
      })}
    </BlockRowDiv>
  );
}

export default BlockStyled;
