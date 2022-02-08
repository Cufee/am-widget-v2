// Libraries
import { useContext, useEffect, useState } from "react";
// Types
import { GenerateSettings } from "../../api/settings/types/GenerateSettings";
// Contexts
import { SettingsContext } from "../../contexts/SettingsContext/SettingsContext";
// Components
import { localeOptions, realmOptions } from "./core/constants/settings";
import presets from "../styled/presets/presets";
import Button from "../../core/Button/Button";

function SettingsContainer() {
  const { settings, setSettings } = useContext(SettingsContext);
  const [settingsChanged, setSettingsChanged] =
    useState<GenerateSettings>(settings);

  const setSettingsKey = (update: Partial<GenerateSettings>) => {
    setSettingsChanged({ ...settingsChanged, ...update });
  };

  const onSave = () => {
    if (settingsChanged !== settings) {
      setSettings(settingsChanged);
    }
  };

  const [realmValid, setRealmValid] = useState(
    realmOptions.includes(settings?.player?.realm?.toUpperCase())
  );
  const setRealm = (realm: string) => {
    setSettingsKey({
      player: { ...settingsChanged?.player, realm: realm.toUpperCase() },
    });

    if (realmOptions.includes(realm.toUpperCase())) {
      setRealmValid(true);
    } else setRealmValid(false);
  };

  const [localeValid, setLocaleValid] = useState(
    localeOptions.includes(settings?.options?.locale?.toLowerCase())
  );
  const setLocale = (locale: string) => {
    setSettingsKey({
      options: { ...settingsChanged?.options, locale: locale.toUpperCase() },
    });

    if (localeOptions.includes(locale.toUpperCase())) {
      setLocaleValid(true);
    } else setLocaleValid(false);
  };

  const [presetValid, setPresetValid] = useState(
    presets.map((p) => p.key).includes(settings?.stylePreset)
  );
  const setStylePreset = (preset: string) => {
    setSettingsKey({
      stylePreset: preset.toLowerCase(),
    });

    if (presets.map((p) => p.key).includes(preset.toLowerCase())) {
      setPresetValid(true);
    } else setPresetValid(false);
  };

  const [canSave, setCanSave] = useState(false);
  useEffect(() => {
    if (
      settingsChanged !== settings &&
      presetValid &&
      realmValid &&
      localeValid
    ) {
      setCanSave(true);
    } else {
      setCanSave(false);
    }
  }, [settingsChanged, presetValid, realmValid, localeValid, settings]);

  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="flex text-white opacity-40 text-xl justify-center uppercase">
        Settings
      </div>

      <div className="pt-0 flex gap-2">
        <div className="flex flex-row gap-1 w-full">
          <div className="flex p-2 bg-base-light rounded-md rounded-r-none flex-grow justify-center">
            PlayerID
          </div>
          <div className="flex bg-base-light rounded-md rounded-l-none flex-grow justify-center overflow-hidden">
            <input
              className={`p-2 bg-base-light w-full text-center ${
                settingsChanged?.player?.id ? "" : "border-2 border-red-500"
              }`}
              value={settingsChanged?.player?.id || ""}
              onChange={(e) =>
                setSettingsKey({
                  player: {
                    ...settingsChanged?.player,
                    id: Number.parseInt(e.target.value.toString()) || 0,
                  },
                } as GenerateSettings)
              }
            />
          </div>
        </div>
      </div>

      <div className="pt-0 flex gap-2">
        <div className="flex flex-row gap-1 w-full">
          <div className="flex p-2 bg-base-light rounded-md rounded-r-none flex-grow justify-center">
            Realm
          </div>
          <div className="flex bg-base-light rounded-md rounded-l-none flex-grow justify-center overflow-hidden">
            <input
              className={`p-2 bg-base-light w-full text-center ${
                realmValid ? "" : "border-red-500 border-2"
              }`}
              value={settingsChanged?.player?.realm || ""}
              onChange={(e) => setRealm(e.target.value.toString())}
            />
          </div>
        </div>

        <div className="flex flex-row gap-1 w-full">
          <div className="flex p-2 bg-base-light rounded-md rounded-r-none flex-grow justify-center">
            Locale
          </div>
          <div className="flex bg-base-light rounded-md rounded-l-none flex-grow justify-center overflow-hidden">
            <input
              className={`p-2 bg-base-light w-full text-center ${
                localeValid ? "" : "border-red-500 border-2"
              }`}
              value={settingsChanged?.options?.locale || ""}
              onChange={(e) => setLocale(e.target.value.toString())}
            />
          </div>
        </div>
      </div>

      <div className="pt-0 flex gap-2">
        <div className="flex flex-row gap-1 w-full">
          <div className="flex p-2 bg-base-light rounded-md rounded-r-none flex-grow justify-center">
            Style
          </div>
          <div className="flex bg-base-light rounded-md rounded-l-none flex-grow justify-center overflow-hidden">
            <input
              className={`p-2 bg-base-light w-full text-center ${
                presetValid ? "" : "border-red-500 border-2"
              }`}
              value={settingsChanged?.stylePreset || ""}
              onChange={(e) => setStylePreset(e.target.value.toString())}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-grow items-end">
        {canSave && <Button onClick={() => onSave()}>Save</Button>}
        {!canSave && (
          <div className="px-4 py-2 bg-blue-500 rounded-md opacity-50">
            Saved
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsContainer;
