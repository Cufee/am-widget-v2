import { ApiResponse } from "../core/types/ApiResponse";

export default async function getStatsBySettingsId(
  settingsId: string
): Promise<ApiResponse> {
  if (!settingsId) {
    return {
      error: {
        message: "Settings ID is required",
      },
    };
  }
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/stats/settings/${settingsId}`
    );
    const json = await response.json();
    return json;
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
