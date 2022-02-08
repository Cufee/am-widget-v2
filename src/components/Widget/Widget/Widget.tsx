// Libraries
import styled from "styled-components";
// Libraries - Types
import { useEffect, useState } from "react";
// Types
import StatsResponse from "../../api/stats/types/ApiResponse";
// Hooks
import { useDetectHeadless } from "../../hooks/useDetectHeadless/useDetectHeadless";
// Components
import Loading from "../core/Loading/Loading";
import NotReady from "../core/NotReady/NotReady";
import ApplyPreset from "../core/ApplyPreset/ApplyPreset";
// Api
import getStatsBySettingsId from "../../api/stats/getStatsBySettingsId";
import HeadlessProps from "./core/types/HeadlessProps";

interface HeadlessStyleProps {
  backgroundImage?: string;
  withBackground?: boolean;
  headless?: boolean;
  blur?: string;
}

const WidgetStyledDiv = styled.div<HeadlessStyleProps>`
  max-width: fit-content;
  user-select: none;

  ${(p) =>
    p.backgroundImage &&
    p.withBackground &&
    !p.headless &&
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

function Widget({ settingsId, style }: HeadlessProps) {
  const headless = useDetectHeadless();

  const [statsData, setStatsData] = useState<StatsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getStatsBySettingsId(settingsId).then((response) => {
      setStatsData(response);
      setIsLoading(false);
    });
  }, [settingsId]);

  if (isLoading) return <Loading />;
  if (!statsData || !statsData.cards) {
    if (!headless)
      return (
        <NotReady
          title="No Signal"
          message="Use the settings page to configure the widget"
        />
      );
    return (
      <NotReady
        title="Not Set Up"
        message="You need to configure the widget from a browser window"
      />
    );
  }
  return (
    <WidgetStyledDiv
      backgroundImage={style.backgroundImage}
      withBackground={style.withBackground}
      headless={headless}
    >
      {ApplyPreset({ name: statsData.styleProfile || "" })({
        cards: statsData.cards,
      })}
    </WidgetStyledDiv>
  );
}

export default Widget;
