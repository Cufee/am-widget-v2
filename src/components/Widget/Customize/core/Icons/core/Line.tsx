import tw from "tailwind-styled-components";

interface LineProps {
  direction: "horizontal" | "vertical";
}

export const Line = tw.div<LineProps>`
  absolute
  origin-center
  rounded-xl
  box-border
  bg-gray-600
  ${(p) => (p.direction === "horizontal" ? `w-4/6 h-1/6` : `h-4/6 w-1/6`)}
`;

export default Line;
