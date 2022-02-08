import ApiResponse from "./types/ApiResponse";

export default async function getStatsBySettingsId(
  settingsId: string
): Promise<ApiResponse> {
  if (!settingsId) {
    return {} as ApiResponse;
  }
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/stats/settings/${settingsId}`
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
    return {} as ApiResponse;
  }
}
