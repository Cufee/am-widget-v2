import { useEffect, useState } from "react";
import StatsWidget from "../StatsWiget/StatsWidget";
import SettingsContainer from "./SettingsContainer/SettingsContainer";
import styled from "styled-components";
import Button from "../common/Button/Button";
import ObsStudioWindow from "./ObsStudioWindow";

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

  const playerId = "1013379500";
  const playerRealm = "NA";

  if (isOBS)
    return (
      <StatsWidget
        isOBS={isOBS}
        playerId={playerId}
        playerRealm={playerRealm}
        profile={profile}
      />
    );
  return (
    <div className="flex flex-col gap-4">
      <WidgetSettingsDiv className="flex flex-col lg:flex-row gap-4 justify-center">
        <div className="rounded-xl w-full bg-base-dark">
          <Button passThroughProps={{ onClick: toggleProfile }}>Switch</Button>
          <SettingsContainer />
        </div>
        <div
          className="rounded-xl overflow-hidden flex flex-col max-w-max bg-base-dark"
          style={{ minWidth: "fit-content" }}
        >
          <div className="flex text-white opacity-40 text-xl justify-center m-4 mb-2 uppercase">
            Preview
          </div>
          <ObsStudioWindow>
            <StatsWidget
              isOBS={isOBS}
              withBackground={false}
              playerId={playerId}
              playerRealm={playerRealm}
              profile={profile}
            />
          </ObsStudioWindow>
        </div>
      </WidgetSettingsDiv>
      <div className="bg-base-dark rounded-xl p-4">
        <div className="flex flex-row gap-2">
          <Button>Copy</Button>
          <div className="flex items-center bg-base-light w-full rounded-md px-4 justify-center">
            http://123
          </div>
        </div>
      </div>
    </div>
  );
}

const WidgetSettingsDiv = styled.div``;

export default WidgetSettings;
