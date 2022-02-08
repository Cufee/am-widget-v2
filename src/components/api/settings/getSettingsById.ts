import { GenerateSettings } from "./types/GenerateSettings";

export default async function getSettingsById(
  settingsId: string
): Promise<GenerateSettings> {
  if (!settingsId) {
    return {} as GenerateSettings;
  }
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/settings/${settingsId}`
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
    return {} as GenerateSettings;
  }
}
