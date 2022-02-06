import { CSSObject } from "styled-components";
import { textLargeStyle, textMediumStyle, textSmallStyle } from "./block";
import { playerClanStyle, playerNameStyle } from "./custom";

export default function StyleFromTags(tags: string[]): CSSObject {
  if (!tags || tags.length === 0) {
    return {};
  }

  let style = {};

  // Blocks
  if (tags.includes("session")) {
    style = { ...style, ...textLargeStyle };
  }
  if (tags.includes("allTime")) {
    style = { ...style, ...textMediumStyle };
  }
  if (tags.includes("label")) {
    style = { ...style, ...textSmallStyle };
  }

  // Vehicles
  if (tags.includes("vehicleTier")) {
    style = { ...style, ...textSmallStyle };
  }

  // Player Name
  if (tags.includes("playerName")) {
    style = { ...style, ...playerNameStyle };
  }
  if (tags.includes("playerClan")) {
    style = { ...style, ...playerClanStyle };
  }

  return style;
}
