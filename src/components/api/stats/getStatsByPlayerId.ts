import ApiResponse from "./types/ApiResponse";

export default async function getStatsByPlayerId(
  settingsId: string,
  playerID: string,
  realm: string,
  locale: string = "en_US"
): Promise<ApiResponse> {
  if (!settingsId || !playerID || !realm) {
    return {} as ApiResponse;
  }

  const playerIDNumber = Number(playerID);
  if (isNaN(playerIDNumber)) {
    return {} as ApiResponse;
  }

  const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/stats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      player_id: playerIDNumber,
      settings_id: settingsId,
      locale,
      realm,
    }),
  });

  const json = await response.json();
  return json.data;
}
