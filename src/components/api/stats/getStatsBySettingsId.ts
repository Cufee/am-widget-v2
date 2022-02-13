import { ApiResponse } from "../core/types/ApiResponse";

export default async function getStatsBySettingsId(
  settingsId: string
): Promise<ApiResponse> {
  if (!settingsId) {
    console.debug("getStatsBySettingsId: settingsId is empty");
    return {
      error: {
        message: "Settings ID is required",
      },
    };
  }
  console.debug(`getStatsBySettingsId: settingsId=${settingsId}`);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/stats/settings/${settingsId}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.debug(`getStatsBySettingsId: error=${JSON.stringify(error)}`);
    return {
      error: {
        message: "Failed to get stats",
        context: `${error}`,
      },
    };
  }
}
