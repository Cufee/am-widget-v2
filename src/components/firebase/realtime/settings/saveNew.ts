import { update, push } from "firebase/database";
import { GenerateSettings } from "../../../api/settings/types/GenerateSettings";
import { settingsDb } from "./core/getDatabase";

export async function saveNew(
  settings: GenerateSettings
): Promise<string | null> {
  if (!settings?.player?.id || !settings?.player?.realm) {
    throw new Error("Invalid settings");
  }

  try {
    const newID = push(settingsDb).key;
    const payload = {
      [`${newID}/`]: settings,
    };
    await update(settingsDb, payload);
    return newID;
  } catch (error) {
    throw new Error("Failed to save settings");
  }
}
