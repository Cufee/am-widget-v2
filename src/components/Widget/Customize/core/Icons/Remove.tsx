import Line from "./core/Line";
import Container from "./core/Container";
import { IconProps } from "./core/types/IconProps";
import tw from "tailwind-styled-components";

const LineRotated = tw(Line)`
    origin-center rotate-45
  `;

function RemoveIcon({ size, onClick }: IconProps) {
  return (
    <Container size={size} onClick={onClick}>
      <LineRotated direction="horizontal" />
      <LineRotated direction="vertical" />
    </Container>
  );
}

export default RemoveIcon;
