import Stats from "./types/Stats";

export default async function getStatsBySettingsId(
  settingsId: string
): Promise<Stats> {
  if (!settingsId) {
    return {} as Stats;
  }
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/stats/settings/${settingsId}`
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
    return {} as Stats;
  }
}
