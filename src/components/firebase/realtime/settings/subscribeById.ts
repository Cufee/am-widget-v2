import { child, onValue, DataSnapshot, Unsubscribe } from "firebase/database";
import { settingsDb } from "./core/getDatabase";

import { GenerateSettings } from "../../../api/settings/types/GenerateSettings";

export async function subscribeById(
  id: string,
  callback: (settings: GenerateSettings | null) => void
): Promise<Unsubscribe> {
  const pathRef = child(settingsDb, id);

  const unsubscribe = onValue(pathRef, (snapshot: DataSnapshot) => {
    console.log("callback");
    if (snapshot.exists()) {
      return callback(snapshot.toJSON() as GenerateSettings | null);
    } else {
      callback(null); // reset state
      unsubscribe();
    }

    // generate error
  });
  return () => {
    console.log("unsubscribe");
    unsubscribe();
  };
}
