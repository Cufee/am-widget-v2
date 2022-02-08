// Libraries
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Types
import SettingsInterface from "../../Widget/Settings/core/types/SettingsInterface";
// Components
import Button from "../../core/Button/Button";
import Preview from "../../Widget/Preview/Preview";
import Settings from "../../Widget/Settings/Settings";
import { useDetectHeadless } from "../../hooks/useDetectHeadless/useDetectHeadless";
import Headless from "../../Widget/Headless/Headless";

function WidgetSettings() {
  const location = useLocation();

  // Determine if the app is open in OBS
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

  const [settings, setSettings] = useState<SettingsInterface>(
    {} as SettingsInterface
  );

  // Page opened in OBS
  const headless = useDetectHeadless();
  if (headless) return <Headless />;
  // If the app is open in the browser
  return (
    <div className="flex flex-col gap-4">
      <WidgetSettingsDiv className="flex flex-col lg:flex-row gap-4 justify-center">
        <div className="rounded-xl w-full bg-base-dark">
          <Settings settings={settings} setSettings={setSettings} />
        </div>
        <div className="rounded-xl w-full bg-base-dark">
          <Preview
            settingsId={settings.settingsId}
            style={{ withBackground: false }}
          />
        </div>
      </WidgetSettingsDiv>
      <div className="bg-base-dark rounded-xl p-4">
        <div className="flex flex-row gap-2">
          <Button>Copy</Button>
          <div className="flex items-center bg-base-light w-full rounded-md px-4 py-2 h-full justify-center text-gray-400">
            {pageHref}
          </div>
        </div>
      </div>
    </div>
  );
}

const WidgetSettingsDiv = styled.div``;

export default WidgetSettings;
