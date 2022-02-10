import { child, onValue, DataSnapshot, Unsubscribe } from "firebase/database";
import { settingsDb } from "./core/getDatabase";

import { GenerateSettings } from "../../../api/settings/types/GenerateSettings";

export async function subscribeById(
  id: string,
  callback: (settings: GenerateSettings | null) => void
): Promise<Unsubscribe> {
  const pathRef = child(settingsDb, id);

  const unsubscribe = onValue(pathRef, (snapshot: DataSnapshot) => {
    if (snapshot.exists()) {
      return callback(snapshot.toJSON() as GenerateSettings | null);
    } else {
      callback(null); // reset state
      unsubscribe();
      throw new Error("Failed to subscribe to settings");
    }
  });
  return () => {
    unsubscribe();
  };
}
