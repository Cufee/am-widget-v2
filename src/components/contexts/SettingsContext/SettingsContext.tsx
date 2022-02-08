import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getSettingsById from "../../api/settings/getSettingsById";
import newSettings from "../../api/settings/newSettings";
import saveSettingsBuId from "../../api/settings/saveSettingsById";
import { GenerateSettings } from "../../api/settings/types/GenerateSettings";

interface SettingsCtx {
  id: string;
  setId: (settingsId: string) => void;

  settings: GenerateSettings;
  setSettings: (settings: GenerateSettings) => void;
}

export const SettingsContext = createContext({} as SettingsCtx);

export const SettingsContextWrapper = ({ children }: PropsWithChildren<{}>) => {
  const [settingsId, setSettingsIdSimple] = useState("");
  const [settings, setSettingsSimple] = useState<GenerateSettings>(
    {} as GenerateSettings
  );

  const setSettings = (updated: GenerateSettings) => {
    if (settings !== updated) {
      setSettingsSimple(updated);
      if (settingsId) {
        saveSettingsBuId(updated, settingsId).then((settings) => {
          setSettingsSimple(settings);
        });
      } else {
        newSettings(updated).then((id) => {
          setSettingsId(id);
        });
      }
    }
  };

  const location = useLocation();
  const setSettingsId = (newSettingsId: string) => {
    setSettingsIdSimple(newSettingsId);

    const search = new URLSearchParams(location.search);
    search.set("settingsId", newSettingsId);
    window.history.pushState({}, "", `?${search.toString()}`);

    if (settingsId !== newSettingsId) {
      getSettingsById(newSettingsId).then((settings) => {
        setSettingsSimple(settings);
      });
    }
  };
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const queryId = search.get("settingsId");
    if (queryId) {
      setSettingsId(queryId);
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{ settings, id: settingsId, setSettings, setId: setSettingsId }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
