import { ApiResponse } from "../core/types/ApiResponse";

export default async function getStatsByPlayerId(
  playerID: string,
  realm: string,
  locale: string = "en"
): Promise<ApiResponse> {
  if (!playerID || !realm) {
    return {
      error: {
        message: "Settings ID, player ID and realm are required",
      },
    };
  }

  const playerIDNumber = Number(playerID);
  if (isNaN(playerIDNumber)) {
    return {
      error: {
        message: "Player ID must be a number",
      },
    };
  }

  const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/stats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      player_id: playerIDNumber,
      locale,
      realm,
    }),
  });

  return await response.json();
}
