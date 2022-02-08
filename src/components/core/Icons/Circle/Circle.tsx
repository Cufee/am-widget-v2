import styled from "styled-components";

interface StyledCircleProps {
  color?: string;
  size: string;
}

const StyledCircle = styled.div<StyledCircleProps>`
  ${(props) => props.color && `background-color: ${props.color}`};
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;
`;

function Circle({
  size,
  color,
  classes,
  children,
}: {
  size: string;
  color?: string;
  classes?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <StyledCircle size={size} color={color} className={classes?.join(" ")}>
        {children}
      </StyledCircle>
    </div>
  );
}

export default Circle;
