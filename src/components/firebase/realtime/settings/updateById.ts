import { update } from "firebase/database";
import { settingsDb } from "./core/getDatabase";

import { GenerateSettings } from "../../../api/settings/types/GenerateSettings";

export async function updateSettingsById(
  id: string,
  settings: GenerateSettings
): Promise<void> {
  if (!id || !settings?.player?.id || !settings?.player?.realm) {
    // handler error
    return;
  }

  const payload = {
    [`${id}/`]: settings,
  };

  try {
    return update(settingsDb, payload);
  } catch (error) {
    // handler error
    return;
  }
}
