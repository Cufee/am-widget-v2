import { PropsWithChildren } from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`
flex
text-white
opacity-40
text-xl
justify-center
uppercase
`;

function CardTitle({ children }: PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}

export default CardTitle;
