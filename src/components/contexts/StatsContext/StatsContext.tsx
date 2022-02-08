import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getSettingsById from "../../api/settings/getSettingsById";
import newSettings from "../../api/settings/newSettings";
import saveSettingsBuId from "../../api/settings/saveSettingsById";
import { GenerateSettings } from "../../api/settings/types/GenerateSettings";
import Stats from "../../api/stats/types/Stats";

interface StatsCtx {
  stats: Stats;
  setStats: (stats: Stats) => void;
}

export const StatsContext = createContext({} as StatsCtx);

export const StatsContextWrapper = ({ children }: PropsWithChildren<{}>) => {
  const [stats, setStats] = useState({} as Stats);

  return (
    <StatsContext.Provider value={{ stats, setStats }}>
      {children}
    </StatsContext.Provider>
  );
};
