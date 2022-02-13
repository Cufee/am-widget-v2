import { PropsWithChildren } from "react";

function Button({
  passThroughProps,
  children,
  classes,
  onClick,
}: PropsWithChildren<{
  passThroughProps?: any;
  onClick?: () => void;
  classes?: string[];
}>) {
  return (
    <button
      className={`${classes?.join(
        " "
      )} bg-primary text-white font-bold py-2 px-4 rounded cursor-pointer ${
        !passThroughProps?.disabled
          ? "hover:bg-primary-hover"
          : "bg-primary-hover cursor-not-allowed"
      }`}
      {...passThroughProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
