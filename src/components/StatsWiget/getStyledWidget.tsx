import StatsWidgetStyled from "./StatsWidgetStyled/minimal/StatsWidgetStyled";

function getStyledWidget({ profile }: { profile: string }) {
  switch (profile) {
    case "minimal":
      return StatsWidgetStyled;

    default:
      return StatsWidgetStyled;
  }
}

export default getStyledWidget;
