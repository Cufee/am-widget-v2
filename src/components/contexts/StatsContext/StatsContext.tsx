import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import getStatsBySettingsId from "../../api/stats/getStatsBySettingsId";
import Stats from "../../api/stats/types/Stats";
import { SettingsContext } from "../SettingsContext/SettingsContext";

interface StatsCtx {
  stats: Stats;
  statsLoading: boolean;
  unsafe: {
    setStats: (stats: Stats) => void;
  };
}

export const StatsContext = createContext({} as StatsCtx);

export const StatsContextWrapper = ({ children }: PropsWithChildren<{}>) => {
  const { settings, id } = useContext(SettingsContext);

  const [stats, unsafeSetStats] = useState({} as Stats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getStatsBySettingsId(id).then((response) => {
      if (response) {
        unsafeSetStats(response);
      }
      setLoading(false);
    });
  }, [id, settings]);

  return (
    <StatsContext.Provider
      value={{
        stats,
        statsLoading: loading,
        unsafe: { setStats: unsafeSetStats },
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};
