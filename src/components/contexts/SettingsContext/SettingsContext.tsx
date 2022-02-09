import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { omit, isEqual, throttle } from "lodash";
import { GenerateSettings } from "../../api/settings/types/GenerateSettings";

import { Unsubscribe } from "firebase/database";
import { subscribeById } from "../../firebase/realtime/settings/subscribeById";

import setSearchParams from "../../functions/setSearchParams";
import { updateSettingsById } from "../../firebase/realtime/settings/updateById";
import { saveNew } from "../../firebase/realtime/settings/saveNew";

interface SettingsCtx {
  id: string;

  settings: GenerateSettings | null;
  updateSettings: (settings: GenerateSettings) => void;
}
export const SettingsContext = createContext({} as SettingsCtx);

const settingsIdQueryKey = "sid";

export const SettingsContextWrapper = ({ children }: PropsWithChildren<{}>) => {
  const [settingsId, setSettingsIdSimple] = useState("");
  const [settings, unsafeSetSettings] = useState<GenerateSettings | null>(null);

  const setSettingsCallback = (newSettings: GenerateSettings | null) => {
    if (!isEqual(omit(newSettings, "lastUsed"), omit(settings, "lastUsed"))) {
      unsafeSetSettings(newSettings);
    }
  };

  const updateSettings = (updated: GenerateSettings) => {
    // this will also update the local state through the listener
    if (settingsId) {
      updateSettingsById(settingsId, updated);
    } else {
      saveNew(updated).then((id) => {
        if (id) {
          setSettingsId(id);
        }
      });
    }
  };

  const [unsub, setUnsub] = useState<{ do: Unsubscribe | null }>({ do: null }); // Setting a function into state directly calls the function on state change.
  const setSettingsId = (newSettingsId: string) => {
    if (settingsId !== newSettingsId) {
      setSettingsIdSimple(newSettingsId);
      if (unsub.do) {
        unsub.do(); // clear old subscription
      }
      subscribeById(newSettingsId, setSettingsCallback).then((unsubscribe) => {
        setUnsub({ do: unsubscribe });
      });
      setSearchParams(location, settingsIdQueryKey, newSettingsId);
    }
  };

  // Listen for query params changes
  const location = useLocation();
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const queryId = search.get(settingsIdQueryKey);
    console.log("query id", queryId);
    if (queryId) {
      setSettingsId(queryId);
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        id: settingsId,
        updateSettings,
        settings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
