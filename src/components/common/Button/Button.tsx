import { PropsWithChildren } from "react";

function Button({
  children,
  passThroughProps,
}: PropsWithChildren<{ passThroughProps?: any }>) {
  return (
    <button
      className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded"
      {...passThroughProps}
    >
      {children}
    </button>
  );
}

export default Button;
