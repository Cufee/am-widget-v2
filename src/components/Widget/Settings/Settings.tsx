// Libraries
import { useContext, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { merge } from "lodash";
// Types
import { GenerateSettings } from "../../api/settings/types/GenerateSettings";
// Contexts
import { SettingsContext } from "../../contexts/SettingsContext/SettingsContext";
// Components
import Button from "../../core/Button/Button";
import getIdFromName from "../../api/wargaming/getIdFromName";
import { useToast } from "../../hooks/useToast/useToast";
import CardTitle from "../../core/Card/Title/CardTitle";
import TextInput from "./core/styled/TextInput";
import SelectInput from "./core/styled/SelectInput";
import {
  defaultStylePresets,
  localeOptions,
  realmOptions,
} from "./core/constants/settings";

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

function SettingsContainer() {
  const { addFromError } = useToast();

  const { settings, updateSettings } = useContext(SettingsContext);
  const [settingsChanged, setSettingsChanged] =
    useState<GenerateSettings | null>(settings);

  useEffect(() => {
    setSettingsChanged(settings);
  }, [settings]);

  const setSettingsKey = (update: RecursivePartial<GenerateSettings>) => {
    const newState = merge({}, settingsChanged, update) as GenerateSettings;
    setSettingsChanged(newState);
    return newState;
  };

  const onSave = async () => {
    if (settingsChanged?.player?.realm && settingsChanged?.player?.name) {
      const res = await getIdFromName(
        settingsChanged.player.name,
        settingsChanged.player.realm
      );
      if (res.error) return addFromError(res.error);

      const newState = setSettingsKey({
        player: {
          id: res.data,
        },
      });
      updateSettings(merge(settings, settingsChanged, newState));
    } else {
      addFromError({ message: "Please enter a player name and realm" });
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
    <div className="flex flex-col gap-2 h-full">
      <CardTitle>Settings</CardTitle>

      <div className="pt-0 flex gap-2">
        <TextInput
          flex="row"
          value={settingsChanged?.player?.name || ""}
          required={true}
          onChange={(n) => {
            setSettingsKey({ player: { name: n } });
          }}
        >
          Player Name
        </TextInput>
      </div>

      <div className="pt-0 flex gap-2">
        <SelectInput
          flex="row"
          options={realmOptions}
          value={settingsChanged?.player?.realm || ""}
          required={true}
          onChange={setRealm}
        >
          Realm
        </SelectInput>

        <SelectInput
          flex="row"
          options={localeOptions}
          value={settingsChanged?.locale || ""}
          required={true}
          onChange={setLocale}
        >
          Language
        </SelectInput>
      </div>

      <div className="pt-0 flex gap-2">
        <SelectInput
          flex="row"
          options={defaultStylePresets}
          value={settingsChanged?.stylePreset || ""}
          onChange={setStylePreset}
        >
          Style
        </SelectInput>
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
