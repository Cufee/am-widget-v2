import { GenerateSettings } from "./types/GenerateSettings";

export default async function getSettingsById(
  settingsId: string
): Promise<GenerateSettings> {
  if (!settingsId) {
    console.debug("getSettingsById: settingsId is empty");
    throw new Error("Invalid settings ID");
  }
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/settings/${settingsId}`
    );
    const json = await response.json();
    console.debug(`getSettingsById: response=${JSON.stringify(json)}`);
    return json.data;
  } catch (error) {
    console.debug(`getSettingsById: error=${JSON.stringify(error)}`);
    throw new Error("Failed to get settings");
  }
}
