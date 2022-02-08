import { PropsWithChildren } from "react";

function Button({
  children,
  passThroughProps,
  onClick,
}: PropsWithChildren<{ passThroughProps?: any; onClick?: () => void }>) {
  return (
    <button
      className={`bg-primary text-white font-bold py-2 px-4 rounded cursor-pointer ${
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
