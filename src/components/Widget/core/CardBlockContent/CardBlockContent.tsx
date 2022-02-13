import Circle from "../../../core/Icons/Circle/Circle";
import styled from "styled-components";
import {
  BlockRowContent,
  IconContent,
  ImageContent,
  TextContent,
} from "../types/BlockRowContent";
import DoubleArrowUp from "../../../core/Icons/Arrow/DoubleArrowUp";
import DoubleArrowDown from "../../../core/Icons/Arrow/DoubleArrowDown";
import Line from "../../../core/Icons/Line/Line";

export const contentTypeText = "text";
export const contentTypeIcon = "icon";
export const contentTypeImage = "image";

function CardBlockContent({ content }: { content: BlockRowContent }) {
  switch (content.type) {
    case contentTypeText:
      return <TextContentElement content={content} />;

    case contentTypeIcon:
      return <IconContentElement content={content} />;

    case contentTypeImage:
      return <ImageContentElement content={content} />;

    default:
      return <TextContentElement content={content} />;
  }
}

// Text
function TextContentElement({ content }: { content: BlockRowContent }) {
  let body = content.content as TextContent;
  return <>{body}</>;
}

// Icon
function getIconByName(body: IconContent) {
  switch (body.name) {
    case "circle":
      return (
        <Circle
          color={body.color || "white"}
          size={body.size ? body.size + "px" : "0.6em"}
        />
      );
    case "arrowUp":
      return (
        <DoubleArrowUp
          color={body.color || "white"}
          size={body.size ? body.size + "px" : "0.5em"}
        />
      );
    case "arrowDown":
      return (
        <DoubleArrowDown
          color={body.color || "white"}
          size={body.size ? body.size + "px" : "0.5em"}
        />
      );

    default:
      return <div></div>;
  }
}
function IconContentElement({ content }: { content: BlockRowContent }) {
  const body = content.content as IconContent;
  return getIconByName(body);
}

// Image
interface ImageStyleProps {
  width?: number;
  height?: number;
}
const ImageStyled = styled.img<ImageStyleProps>`
  ${(p) => p.width && `width: ${p.width}px;`}
  ${(p) => p.height && `width: ${p.height}px;`}
`;
function ImageContentElement({ content }: { content: BlockRowContent }) {
  const body = content.content as ImageContent;

  return <ImageStyled width={body.width} height={body.height} src={body.url} />;
}

export default CardBlockContent;
