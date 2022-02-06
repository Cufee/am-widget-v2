import { CSSObject } from "styled-components";
import { otherBlockStyle, winrateBlockStyle } from "./block";
import { textSmallStyle } from "./text";

export default function StyleFromTags(tags: string[]): CSSObject {
  if (!tags || tags.length === 0) {
    return {};
  }
  let style = {};

  // Blocks
  if (tags.includes("label")) {
    style = { ...style, ...textSmallStyle };
  }
  if (tags.includes("blockwinrate")) {
    style = { ...style, ...winrateBlockStyle };
  }
  if (tags.includes("blockbattles")) {
    style = { ...style, ...otherBlockStyle };
  }
  if (tags.includes("blockaverage_damage")) {
    style = { ...style, ...otherBlockStyle };
  }

  return style;
}
