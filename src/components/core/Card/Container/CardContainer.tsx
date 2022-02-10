import { PropsWithChildren } from "react";
import tw from "tailwind-styled-components";

interface ContainerProps {
  flex?: "row" | "col";
  padding?: number;
  gap?: number;
}

const Container = tw.div<ContainerProps>`
bg-base-dark
rounded-xl

w-full

flex
${(p) => (p.flex === "row" ? "flex-row" : "flex-col")}
${(p) => (p.padding ? `p-${p.padding}` : "p-4")}
${(p) => (p.gap ? `gap-${p.gap}` : "gap-2")}
`;

function CardContainer(props: PropsWithChildren<ContainerProps>) {
  return <Container {...props}>{props.children}</Container>;
}

export default CardContainer;
