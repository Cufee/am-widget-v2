import { ApiResponse, PlayerBattles } from "./types/PlayerBattles";

export default async function getPlayerBattles(
  playerId: number,
  realm: string
): Promise<PlayerBattles> {
  if (!playerId) {
    return {} as PlayerBattles;
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
        process.env.REACT_APP_WARGAMING_PATH
      }/?${search.toString()}`,
      {
        mode: "no-cors",
      }
    );
    const json = (await response.json()) as ApiResponse;
    return {
      random: json.data[playerId.toString()].statistics.all.battles,
      rating: json.data[playerId.toString()].statistics.rating.battles,
      lastBattleTime: json.data[playerId.toString()].last_battle_time,
    };
  } catch (error) {
    console.error(error);
    return {} as PlayerBattles;
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
