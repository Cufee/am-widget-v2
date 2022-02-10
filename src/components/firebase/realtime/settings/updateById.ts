import { update } from "firebase/database";
import { settingsDb } from "./core/getDatabase";

import { GenerateSettings } from "../../../api/settings/types/GenerateSettings";

export async function updateSettingsById(
  id: string,
  settings: GenerateSettings
): Promise<void> {
  if (!id) {
    throw new Error("Invalid ID");
  }
  if (!settings?.player?.id || !settings?.player?.realm) {
    throw new Error("Invalid player ID or Realm");
  }

  const payload = {
    [`${id}/`]: settings,
  };

  try {
    return update(settingsDb, payload);
  } catch (error) {
    throw new Error("Failed to update settings");
  }
}
