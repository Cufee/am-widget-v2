// Libraries
import styled from "styled-components";
// Libraries - Types
import { useContext } from "react";
// Hooks
import { useDetectHeadless } from "../../hooks/useDetectHeadless/useDetectHeadless";
// Components
import Loading from "../core/Loading/Loading";
import NotReady from "../core/NotReady/NotReady";
import ApplyPreset from "../core/ApplyPreset/ApplyPreset";
// Api
import HeadlessProps from "./core/types/HeadlessProps";
import { StatsContext } from "../../contexts/StatsContext/StatsContext";

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
    `
  padding: 1em;
  backdrop-filter: blur(2em);
  `}
`;
const WithBackground = styled(WidgetStyledDiv)`
  ${(p) =>
    p.backgroundImage &&
    p.withBackground &&
    `
  background-image: url(${p.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0
  `}
`;

function Widget({ style }: HeadlessProps) {
  const headless = useDetectHeadless();
  const { stats, statsLoading } = useContext(StatsContext);

  const tmlBgImage =
    "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?w=400";

  if (statsLoading) return <Loading />;
  if (!stats || !stats.cards) {
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
    <WithBackground
      backgroundImage={tmlBgImage}
      withBackground={style.withBackground}
      id="capture"
    >
      <WidgetStyledDiv
        backgroundImage={tmlBgImage}
        withBackground={style.withBackground}
        headless={headless}
      >
        {ApplyPreset({ name: stats.stylePreset || "" })({
          cards: stats.cards,
        })}
      </WidgetStyledDiv>
    </WithBackground>
  );
}

export default Widget;
