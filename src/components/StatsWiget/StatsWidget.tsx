import { useEffect, useState } from "react";
import StatsResponse from "./types/StatsResponse";
import GetPlayerStatsByID from "./common/getPlayerStats";
import getStyledWidget from "./getStyledWidget";
import styled from "styled-components";

interface WidgetProps {
  stats: {
    settingsId?: string;
    playerId: string;
    locale?: string;
    realm: string;
  };

  style: {
    isOBS?: boolean;
    withBackground?: boolean;
  };
}

interface WidgetStyleProps {
  backgroundImage?: string;
  withBackground?: boolean;
  blur?: string;
  isOBS?: boolean;
}

const StatsWidgetDiv = styled.div<WidgetStyleProps>`
  max-width: fit-content;
  user-select: none;

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
    
    padding: 4rem;
  `}
`;

function StatsWidget({ stats, style }: WidgetProps) {
  const [statsData, setStatsData] = useState<StatsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    GetPlayerStatsByID(
      stats.settingsId || "",
      stats.playerId,
      stats.realm,
      stats.locale || ""
    ).then((statsData) => {
      setStatsData(statsData || {});
      setIsLoading(false);
    });
  }, [stats.playerId, stats.realm, stats.settingsId]);

  if (isLoading) return <div>Loading...</div>;
  if (!statsData || !statsData.cards) return <div>No stats</div>;
  return (
    <StatsWidgetDiv
      isOBS={style.isOBS}
      backgroundImage='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-EUGZcFtTpCq6UHE8UUzB-Unfxd0xrz7oQ")'
      withBackground={style.withBackground}
    >
      {getStyledWidget({ styleProfile: statsData.styleProfile || "" })({
        cards: statsData.cards,
      })}
    </StatsWidgetDiv>
  );
}

export default StatsWidget;
