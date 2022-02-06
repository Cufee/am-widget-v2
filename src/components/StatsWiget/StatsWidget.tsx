import { useEffect, useState } from "react";
import StatsResponse from "./types/StatsResponse";
import GetPlayerStatsByID from "./common/getPlayerStats";
import getStyledWidget from "./getStyledWidget";
import styled from "styled-components";

interface WidgetProps {
  playerId: string;
  playerRealm: string;
  profile: string;
  locale?: string;
  settingsId?: string;

  isOBS?: boolean;
  withBackground?: boolean;
}

interface WidgetStyleProps {
  backgroundImage?: string;
  withBackground?: boolean;
  blur?: string;
  isOBS?: boolean;
}

const StatsWidgetDiv = styled.div<WidgetStyleProps>`
  max-width: fit-content;

  ${(p) =>
    p.backgroundImage &&
    p.withBackground &&
    !p.isOBS &&
    `
    background-image: ${p.backgroundImage};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;


    background-color: rgba(255, 255, 255, .5);
    -webkit-backdrop-filter: blur(10em);
    backdrop-filter: blur(10em);
  `}
`;

function StatsWidget(props: WidgetProps) {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    GetPlayerStatsByID(props.playerId, props.playerRealm, props.profile).then(
      (stats) => {
        setStats(stats || {});
        setIsLoading(false);
      }
    );
  }, [props.playerId, props.playerRealm, props.profile]);

  if (isLoading) return <div>Loading...</div>;
  if (!stats || !stats.cards) return <div>No stats</div>;
  return (
    <StatsWidgetDiv
      isOBS={props.isOBS}
      backgroundImage='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-EUGZcFtTpCq6UHE8UUzB-Unfxd0xrz7oQ")'
      withBackground={props.withBackground}
    >
      {getStyledWidget({ profile: props.profile })({
        cards: stats.cards,
      })}
    </StatsWidgetDiv>
  );
}

export default StatsWidget;
