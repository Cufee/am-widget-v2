import { GenerateSettings } from "./types/GenerateSettings";

export default async function newSettings(
  settings: GenerateSettings
): Promise<string> {
  if (!settings) {
    return "";
  }
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/settings`,
      {
        method: "PUT",
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
    return "";
  }
}
