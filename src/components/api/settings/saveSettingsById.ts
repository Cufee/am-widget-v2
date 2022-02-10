import { GenerateSettings } from "./types/GenerateSettings";

export default async function saveSettingsBuId(
  settings: GenerateSettings,
  settingsId: string
): Promise<GenerateSettings> {
  if (!settingsId || !settings) {
    throw new Error("Invalid settings or settings ID");
  }

  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/settings/${settingsId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      }
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to save settings");
  }
}
