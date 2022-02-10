import { useCallback, useContext, useEffect, useState } from "react";
import getPlayerBattles from "../../api/wargaming/getPlayerBattles";
import { PlayerBattles } from "../../api/wargaming/types/PlayerBattles";
import { SettingsContext } from "../../contexts/SettingsContext/SettingsContext";
import { useToast } from "../useToast/useToast";
import { isEqual } from "lodash";

interface ErrorState {
  status: boolean;
  state?: any;
}

export const usePlayerBattles = () => {
  const { addFromError } = useToast();

  const [errorState, setErrorState] = useState<ErrorState>({ status: false });
  const { settings } = useContext(SettingsContext);
  const [lastBattles, setLastBattles] = useState<PlayerBattles>(
    {} as PlayerBattles
  );

  useCallback(() => {
    if (!isEqual(settings, errorState.state)) {
      errorState && setErrorState({ status: false });
    }
  }, [settings, errorState]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        settings?.player?.id &&
        settings?.player?.realm &&
        !errorState.status
      ) {
        getPlayerBattles(settings.player.id, settings.player.realm).then(
          (res) => {
            if (res.error) {
              setErrorState({ status: true, state: settings });
              return addFromError(res.error);
            }
            setLastBattles(res.data);
          }
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [lastBattles.random, lastBattles.rating, addFromError, settings]);
  return lastBattles;
};
