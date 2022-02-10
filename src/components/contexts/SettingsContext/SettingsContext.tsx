import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { omit, isEqual } from "lodash";
import { GenerateSettings } from "../../api/settings/types/GenerateSettings";

import { Unsubscribe } from "firebase/database";
import { subscribeById } from "../../firebase/realtime/settings/subscribeById";

import setSearchParams from "../../functions/setSearchParams";
import { updateSettingsById } from "../../firebase/realtime/settings/updateById";
import { saveNew } from "../../firebase/realtime/settings/saveNew";
import { useCallback } from "react";
import { useToast } from "../../hooks/useToast/useToast";

interface SettingsCtx {
  id: string;
  settings: GenerateSettings | null;
  updateSettings: (settings: GenerateSettings) => void;
}
export const SettingsContext = createContext({} as SettingsCtx);

const settingsIdQueryKey = "sid";

export const SettingsContextWrapper = ({ children }: PropsWithChildren<{}>) => {
  const { addToast } = useToast();

  const [settingsId, setSettingsIdSimple] = useState("");
  const [settings, unsafeSetSettings] = useState<GenerateSettings | null>(null);

  const setSettingsCallback = useCallback(
    (newSettings: GenerateSettings | null) => {
      if (!isEqual(omit(newSettings, "lastUsed"), omit(settings, "lastUsed"))) {
        unsafeSetSettings(newSettings);
      }
    },
    [settings]
  );
  const updateSettings = (updated: GenerateSettings) => {
    // this will also update the local state through the listener
    if (settingsId) {
      updateSettingsById(settingsId, updated).catch((error) => {
        setSettingsIdSimple("");
        addToast({
          type: "error",
          content: {
            title: "Error",
            message: "Could not update settings",
            context: `${error.message}`,
          },
        });
      });
    } else {
      saveNew(updated).then((id) => {
        if (id) {
          setSettingsId(id);
        }
      });
    }
  };

  const location = useLocation();
  const [unsub, setUnsub] = useState<{ do: Unsubscribe | null }>({ do: null }); // Setting a function into state directly calls the function on state change.
  const setSettingsId = useCallback(
    (newSettingsId: string) => {
      if (settingsId !== newSettingsId) {
        setSettingsIdSimple(newSettingsId);
        if (unsub.do) {
          unsub.do(); // clear old subscription
        }
        subscribeById(newSettingsId, setSettingsCallback).then(
          (unsubscribe) => {
            setUnsub({ do: unsubscribe });
          }
        );

        setSearchParams(location, settingsIdQueryKey, newSettingsId);
      }
    },
    [location, setSettingsCallback, settingsId, unsub]
  );

  // Listen for query params changes
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const queryId = search.get(settingsIdQueryKey);
    if (queryId) {
      setSettingsId(queryId);
    }
  }, [location.search, setSettingsId]);

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
