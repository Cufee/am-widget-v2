// Libraries
import { useContext, useEffect, useState } from "react";
import { merge } from "lodash";
// Types
import { GenerateSettings } from "../../api/settings/types/GenerateSettings";
// Contexts
import { SettingsContext } from "../../contexts/SettingsContext/SettingsContext";
// Components
import Button from "../../core/Button/Button";

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

function SettingsContainer() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const [settingsChanged, setSettingsChanged] =
    useState<GenerateSettings | null>(settings);

  useEffect(() => {
    setSettingsChanged(settings);
  }, [settings]);

  const setSettingsKey = (update: RecursivePartial<GenerateSettings>) => {
    const newState = merge({}, settingsChanged, update) as GenerateSettings;
    setSettingsChanged(newState);
  };

  const onSave = () => {
    if (settingsChanged) {
      console.log(settings);
      updateSettings(merge(settings, settingsChanged));
    }
  };

  const setRealm = (realm: string) => {
    setSettingsKey({
      player: {
        realm: realm.toUpperCase(),
      } as GenerateSettings["player"],
    });
  };

  const setLocale = (locale: string) => {
    setSettingsKey({
      locale: locale.toLowerCase(),
      options: { locale: locale.toLowerCase() },
    });
  };

  const setStylePreset = (preset: string) => {
    setSettingsKey({
      stylePreset: preset.toLowerCase(),
    });
  };

  const [canSave, setCanSave] = useState(false);
  useEffect(() => {
    if (JSON.stringify(settingsChanged) !== JSON.stringify(settings)) {
      setCanSave(true);
    } else {
      setCanSave(false);
    }
  }, [settingsChanged, settings]);

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
              className={`p-2 bg-base-light w-full text-center`}
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
              className={`p-2 bg-base-light w-full text-center`}
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
              className={`p-2 bg-base-light w-full text-center`}
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
