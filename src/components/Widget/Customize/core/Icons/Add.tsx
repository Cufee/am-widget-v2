import Line from "./core/Line";
import Container from "./core/Container";
import { IconProps } from "./core/types/IconProps";

function AddIcon({ size }: IconProps) {
  return (
    <Container size={size}>
      <Line direction="horizontal" />
      <Line direction="vertical" />
    </Container>
  );
}

export default AddIcon;
