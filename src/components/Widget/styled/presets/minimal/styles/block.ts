import { CSSObject } from "styled-components";

export const blockRowStyle: CSSObject = {
  gap: "0.25em",
  justifyContent: "center",
};

export const blockContentStyle: CSSObject = {
  margin: "auto 0",
  whiteSpace: "nowrap",
};

export const blockStyle: CSSObject = {
  padding: "0.25em 0.5em",
  borderRadius: "0.5rem",

  fontSize: "1.15rem",
  lineHeight: "1.15rem",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  alignItems: "center",
  height: "90%",
};

export const highlightBlockStyle: CSSObject = {
  fontSize: "1.35rem",
  lineHeight: "1.35rem",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  alignItems: "center",
};

export const otherBlockStyle: CSSObject = {};
