import { getDatabase, ref } from "firebase/database";
import app from "../../../core/app";

export const settingsDb = ref(getDatabase(app), "stats/settings/");
