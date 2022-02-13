// Libraries
import styled from "styled-components";
// Types
import BlockRow from "../../../core/types/BlockRow";
import CardBlock from "../../../core/types/CardBlock";
import PropsWithTags from "../../../core/types/StyledPropsWithTags";
import ContentToElement from "../../../core/CardBlockContent/CardBlockContent";
// Styles
import styleFromTags from "./styles/styleFromTags";
import { blockContentStyle, blockRowStyle, blockStyle } from "./styles/block";

const BlockDiv = styled.div<PropsWithTags>`
${blockStyle}
${(p) => styleFromTags(p.tags)}}
`;

function CardBlockStyled({ block }: { block: CardBlock }) {
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
const ContentDiv = styled.div<PropsWithTags>`
  ${blockContentStyle}
  ${(p) => styleFromTags(p.tags)}
`;

function BlockRowStyled({ row }: { row: BlockRow }) {
  return (
    <BlockRowDiv className="flex flex-row" data-element="BlockRowStyled">
      {row.content.map((content) => {
        return (
          <ContentDiv
            className="flex justify-center items-center"
            tags={content.tags}
            data-element="BlockRowStyled-content"
            key={`card-row-block-row-content-${Date.now()}-${
              Math.random() * Date.now()
            }`}
          >
            <ContentToElement content={content} />
          </ContentDiv>
        );
      })}
    </BlockRowDiv>
  );
}

export default CardBlockStyled;
