import { useEffect, useState } from "react";
import StatsWidget from "../StatsWiget/StatsWidget";
import SettingsContainer from "./SettingsContainer/SettingsContainer";

function WidgetSettings() {
  // Determine if the app is open in OBS
  const [isOBS, setIsOBS] = useState(false);
  useEffect(() => {
    if (navigator.userAgent.includes("OBS/")) setIsOBS(true);
  }, []);

  const [profile, setProfile] = useState("");
  const toggleProfile = () => {
    if (profile === "") setProfile("minimal");
    else setProfile("");
  };

  const playerId = "1013072123";
  const playerRealm = "NA";

  if (isOBS)
    return (
      <StatsWidget
        playerId={playerId}
        playerRealm={playerRealm}
        profile={profile}
      />
    );
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center m-4">
      <button onClick={toggleProfile}>Switch</button>
      <div className="rounded bg-gray-500 p-4">
        <SettingsContainer />
      </div>
      <div className="rounded p-4">
        <StatsWidget
          playerId={playerId}
          playerRealm={playerRealm}
          profile={profile}
        />
      </div>
    </div>
  );
}

export default WidgetSettings;
