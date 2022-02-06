import { useEffect, useState } from "react";
import StatsWidget from "../StatsWiget/StatsWidget";
import SettingsContainer from "./SettingsContainer/SettingsContainer";
import styled from "styled-components";
import Button from "../common/Button/Button";
import ObsStudioWindow from "./ObsStudioWindow";
import { useLocation } from "react-router-dom";

function WidgetSettings() {
  const location = useLocation();
  // Determine if the app is open in OBS

  const [isOBS, setIsOBS] = useState(false);
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const isOBSQuery = search.get("isOBS") === "true";
    if (navigator.userAgent.includes("OBS/") || isOBSQuery) setIsOBS(true);
  }, [location.search]);

  const [pageHref, setPageHref] = useState(location.pathname);
  useEffect(() => {
    setPageHref(
      window.location.protocol +
        "//" +
        window.location.host +
        location.pathname +
        location.search
    );
  }, [location.pathname, location.search]);

  const playerId = "1013379500";
  const playerRealm = "NA";
  const settingsId = "";
  const locale = "ru_RU";

  if (isOBS)
    return (
      <StatsWidget
        style={{ isOBS }}
        stats={{ playerId, realm: playerRealm, settingsId }}
      />
    );
  return (
    <div className="flex flex-col gap-4">
      <WidgetSettingsDiv className="flex flex-col lg:flex-row gap-4 justify-center">
        <div className="rounded-xl w-full bg-base-dark">
          <SettingsContainer />
        </div>
        <div
          className="rounded-xl overflow-hidden flex flex-col max-w-max bg-base-dark"
          style={{ minWidth: "fit-content" }}
        >
          <div className="flex text-white opacity-40 text-xl justify-center m-4 mb-2 uppercase">
            Preview
          </div>
          <div className="m-4 mt-0">
            <ObsStudioWindow>
              <StatsWidget
                style={{ isOBS, withBackground: false }}
                stats={{ playerId, realm: playerRealm, settingsId, locale }}
              />
            </ObsStudioWindow>
          </div>
        </div>
      </WidgetSettingsDiv>
      <div className="bg-base-dark rounded-xl p-4">
        <div className="flex flex-row gap-2">
          <Button>Copy</Button>
          <div className="flex items-center bg-base-light w-full rounded-md px-4 justify-center text-gray-400">
            {pageHref}
          </div>
        </div>
      </div>
    </div>
  );
}

const WidgetSettingsDiv = styled.div``;

export default WidgetSettings;
