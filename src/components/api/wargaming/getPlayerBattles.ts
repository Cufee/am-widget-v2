import { ApiResponse } from "../core/types/ApiResponse";
import getDomainFromRealm from "./core/getDomainFromRealm";

export default async function getPlayerBattles(
  playerId: number,
  realm: string
): Promise<ApiResponse> {
  if (!playerId) {
    console.debug("getPlayerBattles: playerId is empty");
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
    console.debug(`getPlayerBattles: response=${JSON.stringify(json)}`);

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
          context: "Player ID not found",
          message: "Wargaming API returned no data",
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
    console.debug(`getPlayerBattles: error=${JSON.stringify(error)}`);
    return {
      error: {
        message: "Failed to reach Wargaming API",
        context: `${error}`,
      },
    };
  }
}
