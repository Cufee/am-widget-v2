import { createContext, PropsWithChildren, useState } from "react";

interface SessionIdCtx {
  settingsId: string;
  setSettingsId: (sessionId: string) => void;
}

export const SettingsIdContext = createContext({} as SessionIdCtx);

export const SettingsIdWrapper = ({ children }: PropsWithChildren<{}>) => {
  const [settingsId, setSettingsIdSimple] = useState("");
  const setSettingsId = (sessionId: string) => {
    setSettingsIdSimple(sessionId);
  };
  return (
    <SettingsIdContext.Provider value={{ settingsId, setSettingsId }}>
      {children}
    </SettingsIdContext.Provider>
  );
};
