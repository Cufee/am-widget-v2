import { CSSObject } from "styled-components";
import { highlightBlockStyle } from "./block";
import { textSmallStyle } from "./text";

export default function styleFromTags(tags: string[]): CSSObject {
  if (!tags || tags.length === 0) {
    return {};
  }
  let style = {};

  // Blocks
  if (tags.includes("label")) {
    style = { ...style, ...textSmallStyle };
  }
  if (tags.includes("highlight")) {
    style = { ...style, ...highlightBlockStyle };
  }

  return style;
}
