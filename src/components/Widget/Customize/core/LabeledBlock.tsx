import { PropsWithChildren } from "react";
import NewContainer from "./NewContainer";

interface LabeledBlockProps {
  onClick?: () => void;
}

function LabeledBlock({
  children,
  onClick,
}: PropsWithChildren<LabeledBlockProps>) {
  return <NewContainer onClick={onClick}>{children}</NewContainer>;
}

export default LabeledBlock;
