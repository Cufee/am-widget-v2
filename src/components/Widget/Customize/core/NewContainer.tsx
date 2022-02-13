import { PropsWithChildren } from "react";
import styled from "styled-components";

interface NewContainerProps {
  color?: string;
  height?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const classes = [
  "relative",
  "flex",
  "flex-grow",
  "justify-center",
  "items-center",
  "cursor-pointer",
  "bg-opacity-50",
  "rounded-md",
  "p-2",
];
const StyledContainer = styled.div.attrs(() => ({
  className: [...classes].join(" "),
}))<NewContainerProps>`
  ${(p) => p.height && `height: ${p.height};`}
`;

function NewContainer({
  onClick,
  children,
  height,
  color,
  hoverColor,
}: PropsWithChildren<NewContainerProps>) {
  return (
    <StyledContainer
      className={`${color ? `bg-${color}` : "bg-gray-700"} ${
        hoverColor ? `hover:bg-${hoverColor}` : "hover:bg-gray-600"
      }`}
      color={color}
      hoverColor={hoverColor}
      height={height}
      onClick={onClick}
    >
      {children}
    </StyledContainer>
  );
}

export default NewContainer;
