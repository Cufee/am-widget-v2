// Libraries
import { useState } from "react";
// Types
import SettingsInterface from "./core/types/SettingsInterface";
// Components
import Button from "../../core/Button/Button";

function SettingsContainer({
  settings,
  setSettings,
}: {
  settings: SettingsInterface;
  setSettings: (settings: SettingsInterface) => void;
}) {
  const [settingsChanged, setSettingsChanged] =
    useState<SettingsInterface>(settings);

  const setSettingsKey = (key: keyof SettingsInterface, value: any) => {
    setSettingsChanged({ ...settingsChanged, [key]: value });
  };

  const onSave = () => {
    if (settingsChanged !== settings) {
      setSettings(settingsChanged);
    }
  };

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
              className="p-2 bg-base-light w-full text-center"
              value={settingsChanged.playerId || ""}
              onChange={(e) =>
                setSettingsKey("playerId", e.target.value.toString())
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
              className="p-2 bg-base-light w-full text-center"
              value={settingsChanged.realm || ""}
              onChange={(e) =>
                setSettingsKey("realm", e.target.value.toString())
              }
            />
          </div>
        </div>

        <div className="flex flex-row gap-1 w-full">
          <div className="flex p-2 bg-base-light rounded-md rounded-r-none flex-grow justify-center">
            Locale
          </div>
          <div className="flex bg-base-light rounded-md rounded-l-none flex-grow justify-center overflow-hidden">
            <input
              className="p-2 bg-base-light w-full text-center"
              value={settingsChanged.locale || ""}
              onChange={(e) =>
                setSettingsKey("locale", e.target.value.toString())
              }
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
              className="p-2 bg-base-light w-full text-center"
              value={settingsChanged.settingsId || ""}
              onChange={(e) =>
                setSettingsKey("settingsId", e.target.value.toString())
              }
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-grow items-end">
        <Button
          passThroughProps={{ disabled: settingsChanged === settings }}
          onClick={() => onSave()}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default SettingsContainer;
