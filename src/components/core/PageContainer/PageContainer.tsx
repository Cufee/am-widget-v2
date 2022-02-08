import { PropsWithChildren } from "react";

const classes = [
  "m-4",
  "max-w-7xl",
  "w-auto",

  "flex",
  "flex-col",
  "gap-4",

  "justify-center",
];

function PageContainer({ children }: PropsWithChildren<{}>) {
  return (
    <div
      className={classes.join(" ")}
      style={{ width: "calc(100% - 2rem)", minWidth: "fit-content" }}
    >
      {children}
    </div>
  );
}

export default PageContainer;
