import minimalProfile from "./StatsWidgetStyled/minimal/StatsWidgetStyled";
import defaultProfile from "./StatsWidgetStyled/default/StatsWidgetStyled";

function getStyledWidget({ styleProfile }: { styleProfile: string }) {
  switch (styleProfile) {
    case "minimal":
      return minimalProfile;

    default:
      return defaultProfile;
  }
}

export default getStyledWidget;
