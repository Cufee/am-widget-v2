import { update, push } from "firebase/database";
import { GenerateSettings } from "../../../api/settings/types/GenerateSettings";
import { settingsDb } from "./core/getDatabase";

export async function saveNew(
  settings: GenerateSettings
): Promise<string | null> {
  if (!settings?.player?.id || !settings?.player?.realm) {
    // handler error
    return null;
  }

  try {
    const newID = push(settingsDb).key;
    const payload = {
      [`${newID}/`]: settings,
    };
    await update(settingsDb, payload);
    return newID;
  } catch (error) {
    // handler error
    return null;
  }
}
