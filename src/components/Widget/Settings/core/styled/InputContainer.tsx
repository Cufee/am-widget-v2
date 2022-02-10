import { PropsWithChildren } from "react";
import tw from "tailwind-styled-components";
import InputProps from "../types/InputProps";

const Container = tw.div<InputProps>`
  flex
  w-full
  ${(p) => (p.flex === "row" ? "flex-row" : "flex-col")}
  ${(p) => {
    if (p.required) {
      return p.value
        ? "border-b-2 border-green-400"
        : "border-b-2 border-red-400";
    }
  }}
  rounded-md
  bg-base-light
  overflow-hidden 
`;

function InputContainer(props: PropsWithChildren<InputProps>) {
  return <Container {...props}>{props.children}</Container>;
}

export default InputContainer;
