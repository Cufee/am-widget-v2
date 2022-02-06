import { CSSObject } from "styled-components";
import { minimalTextSmallStyle } from "./block";
import { minimalOtherBlocksStyle, minimalWinrateBlockStyle } from "./custom";

export default function StyleFromTags(tags: string[]): CSSObject {
  if (!tags || tags.length === 0) {
    return {};
  }
  let style = {};

  // Blocks
  if (tags.includes("label")) {
    style = { ...style, ...minimalTextSmallStyle };
  }
  if (tags.includes("blockwinrate")) {
    style = { ...style, ...minimalWinrateBlockStyle };
  }
  if (tags.includes("blockbattles")) {
    style = { ...style, ...minimalOtherBlocksStyle };
  }
  if (tags.includes("blockaverage_damage")) {
    style = { ...style, ...minimalOtherBlocksStyle };
  }

  return style;
}
