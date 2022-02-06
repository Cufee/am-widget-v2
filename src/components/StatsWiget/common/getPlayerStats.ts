import StatsResponse from "../types/StatsResponse";

export default async function GetPlayerStatsByID(
  playerID: string,
  realm: string,
  profile: string
): Promise<StatsResponse> {
  const playerIDNumber = Number(playerID);
  if (isNaN(playerIDNumber)) {
    return {} as StatsResponse;
  }

  const response = await fetch("http://localhost:3001/api/v1/stats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      player_id: playerIDNumber,
      realm,
      profile,
    }),
  });

  const json = await response.json();
  return json.data;
}
