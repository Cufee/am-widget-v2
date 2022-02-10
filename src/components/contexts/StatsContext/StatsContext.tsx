import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import getStatsBySettingsId from "../../api/stats/getStatsBySettingsId";
import Stats from "../../api/stats/types/Stats";
import { usePlayerBattles } from "../../hooks/usePlayerBattles/usePlayerBattles";
import { useToast } from "../../hooks/useToast/useToast";
import { SettingsContext } from "../SettingsContext/SettingsContext";
import { isEqual } from "lodash";

interface StatsCtx {
  stats: Stats;
  statsLoading: boolean;
  unsafe: {
    setStats: (stats: Stats) => void;
  };
}

interface ErrorState {
  status: boolean;
  state?: any;
}

export const StatsContext = createContext({} as StatsCtx);

export const StatsContextWrapper = ({ children }: PropsWithChildren<{}>) => {
  const { addFromError } = useToast();

  const { settings, id } = useContext(SettingsContext);
  const [stats, unsafeSetStats] = useState({} as Stats);
  const [loading, setLoading] = useState(true);
  const playerBattles = usePlayerBattles();
  const [errorState, setErrorState] = useState<ErrorState>({ status: false });

  useCallback(() => {
    if (!isEqual(settings, errorState.state) && errorState.status) {
      setErrorState({ status: false });
    }
  }, [settings, errorState, setErrorState]);

  useEffect(() => {
    if (!id || !settings?.player.id || errorState.state) return;
    loading && setLoading(true);
    getStatsBySettingsId(id).then((res) => {
      if (res.error) {
        setErrorState({ status: true, state: settings });
        addFromError(res.error);
      } else {
        unsafeSetStats(res.data);
      }
      setLoading(false);
    });
  }, [id, settings, playerBattles.lastBattleTime, errorState]); // eslint-disable-line react-hooks/exhaustive-deps -- we only update on settings changes and last battle time changes

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
