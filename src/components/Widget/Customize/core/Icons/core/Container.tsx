import tw from "tailwind-styled-components";
import styled from "styled-components";
import { PropsWithChildren } from "react";
import { IconProps } from "./types/IconProps";

const StyleContainer = styled.div<IconProps>`
  ${(p) => `
    width: ${p.size};
    height: ${p.size};
  `}
`;

const ClassContainer = tw.div`
  relative
  bg-gray-800
  bg-opacity-50
  rounded-md
  h-full
  w-full

  flex
  justify-center
  items-center
`;

function Container({ size, children, onClick }: PropsWithChildren<IconProps>) {
  return (
    <StyleContainer size={size} onClick={onClick}>
      <ClassContainer>{children}</ClassContainer>
    </StyleContainer>
  );
}

export default Container;
