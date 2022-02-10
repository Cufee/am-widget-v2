import { ApiResponse } from "../core/types/ApiResponse";

export default async function getPlayerBattles(
  playerId: number,
  realm: string
): Promise<ApiResponse> {
  if (!playerId) {
    return {
      error: {
        message: "Player ID is required",
      },
    };
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
      return {
        error: {
          message: "Failed to get player battles",
          context: json.error.message,
        },
      };
    }
    if (!json.data?.[playerId]) {
      return {
        error: {
          message: "WarGaming API returned no data",
          context: "Player ID not found",
        },
      };
    }
    return {
      data: {
        random: json?.data[playerId.toString()]?.statistics?.all?.battles || 0,
        rating:
          json?.data[playerId.toString()]?.statistics?.rating?.battles || 0,
        lastBattleTime: json?.data[playerId.toString()]?.last_battle_time || 0,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: "Failed to get stats",
        context: `${error}`,
      },
    };
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
