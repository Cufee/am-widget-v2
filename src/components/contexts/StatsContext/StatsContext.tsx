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
import usePrevious from "../../hooks/usePrevious/usePrevious";
import { PlayerBattles } from "../../api/wargaming/core/types/PlayerBattles";

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
  const [initialLoadingDone, setInitialLoadingDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const playerBattles = usePlayerBattles();
  const prevPlayerBattles = usePrevious<PlayerBattles>(playerBattles);
  const [errorState, setErrorState] = useState<ErrorState>({ status: false });

  useCallback(() => {
    if (!isEqual(settings, errorState.state) && errorState.status) {
      setErrorState({ status: false });
    }
  }, [settings, errorState, setErrorState]);

  const refreshPlayerStats = async () => {
    !initialLoadingDone && setLoading(true);
    const res = await getStatsBySettingsId(id);
    if (res.error) {
      setErrorState({ status: true, state: settings });
      addFromError(res.error);
    } else {
      unsafeSetStats(res.data);
    }
    setLoading(false);
    setInitialLoadingDone(true);
  };

  // if the settings changed, we need to refresh the stats
  useEffect(() => {
    if (!id || !settings?.player.id || errorState.state) {
      return;
    }
    refreshPlayerStats();
  }, [id, settings, errorState.status]); // eslint-disable-line react-hooks/exhaustive-deps

  // if the player battles changed, we need to refresh the stats
  useEffect(() => {
    if (
      !prevPlayerBattles?.lastBattleTime ||
      playerBattles?.lastBattleTime <= stats.lastBattle
    ) {
      return;
    }
    refreshPlayerStats();
  }, [playerBattles.lastBattleTime]); // eslint-disable-line react-hooks/exhaustive-deps -- errorState is already handled above

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
