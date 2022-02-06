import minimalProfile from "./StatsWidgetStyled/minimal/StatsWidgetStyled";
import defaultProfile from "./StatsWidgetStyled/default/StatsWidgetStyled";

function getStyledWidget({ profile }: { profile: string }) {
  switch (profile) {
    case "minimal":
      return minimalProfile;

    default:
      return defaultProfile;
  }
}

export default getStyledWidget;
