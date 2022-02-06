import { CSSObject } from "styled-components";

import {
  playerClanStyle,
  playerNameStyle,
  textLargeStyle,
  textMediumStyle,
  textSmallStyle,
} from "./text";

export default function StyleFromTags(tags: string[]): CSSObject {
  if (!tags || tags.length === 0) {
    return {};
  }

  let style = {};

  // Blocks
  if (tags.includes("session")) {
    style = { ...style, ...textLargeStyle };
  }
  if (
    tags.includes("alltime") ||
    tags.includes("winrate_with_battles_battles")
  ) {
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
