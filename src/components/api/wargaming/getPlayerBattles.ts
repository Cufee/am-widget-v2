import { PlayerBattles } from "./types/PlayerBattles";

export default async function getPlayerBattles(
  playerId: number,
  realm: string
): Promise<PlayerBattles> {
  if (!playerId) {
    return {} as PlayerBattles; // Need to update error state
  }
  try {
    const search = new URLSearchParams({
      fields:
        "statistics.all.battles,statistics.rating.battles,last_battle_time",
      application_id: process.env.REACT_APP_WARGAMING_APP_ID || "",
      account_id: playerId.toString(),
      extra: "statistics.rating",
    });

    const response = await fetch(
      `https://${getDomainFromRealm(realm)}/${
        process.env.REACT_APP_WARGAMING_BATTLES_PATH
      }/?${search.toString()}`
    );

    const json = await response.json();

    if (json.status !== "ok") {
      return {} as PlayerBattles; // Need to update error state
    }
    return {
      random: json?.data[playerId.toString()]?.statistics?.all?.battles || 0,
      rating: json?.data[playerId.toString()]?.statistics?.rating?.battles || 0,
      lastBattleTime: json?.data[playerId.toString()]?.last_battle_time || 0,
    };
  } catch (error) {
    console.error(error);
    return {} as PlayerBattles; // Need to update error state
  }
}

function getDomainFromRealm(realm: string): string {
  switch (realm.toLocaleLowerCase()) {
    case "ru":
      return "api.wotblitz.ru";
    case "eu":
      return "api.wotblitz.eu";
    case "asia":
      return "api.wotblitz.asia";

    default:
      return "api.wotblitz.com";
  }
}
