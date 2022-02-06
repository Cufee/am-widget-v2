import { useEffect, useState } from "react";
import StatsResponse from "./types/StatsResponse";
import GetPlayerStatsByID from "./common/getPlayerStats";

import getStyledWidget from "./getStyledWidget";

interface WidgetProps {
  playerId: string;
  playerRealm: string;
  profile: string;
  locale?: string;
  settingsId?: string;
}

function StatsWidget(props: WidgetProps) {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  useEffect(() => {
    GetPlayerStatsByID(props.playerId, props.playerRealm, props.profile).then(
      (stats) => {
        setStats(stats || {});
      }
    );
  }, [props.playerId, props.playerRealm, props.profile]);

  if (!stats) {
    return <div>Loading...</div>;
  }
  if (!stats.cards) {
    return <div>No stats</div>;
  }

  return (
    <div>
      <div className="absolute text-4xl opacity-10">PREVIEW</div>
      {getStyledWidget({ profile: props.profile })({
        cards: stats.cards,
        width: "700px",
      })}
    </div>
  );
}

export default StatsWidget;
