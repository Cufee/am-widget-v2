import { useContext, useEffect, useState } from "react";
import getStatsBySettingsId from "../../api/stats/getStatsBySettingsId";
import getPlayerBattles from "../../api/wargaming/getPlayerBattles";
import { PlayerBattles } from "../../api/wargaming/types/PlayerBattles";
import { SettingsContext } from "../../contexts/SettingsContext/SettingsContext";
import { StatsContext } from "../../contexts/StatsContext/StatsContext";

export const useStatsRefresh = () => {
  const { settings, id } = useContext(SettingsContext);
  const { setStats } = useContext(StatsContext);

  const [lastBattles, setLastBattles] = useState<PlayerBattles>(
    {} as PlayerBattles
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (settings?.player?.id && settings?.player?.realm) {
        getPlayerBattles(settings.player.id, settings.player.realm).then(
          (response) => {
            if (
              lastBattles.random + lastBattles.rating <
              response.random + response.rating
            ) {
              getStatsBySettingsId(id).then((response) => {
                if (response) {
                  setStats(response);
                }
              });
            }
            setLastBattles(response);
          }
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return { lastBattles };
};
