// Libraries
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Hooks
import { useDetectHeadless } from "../../hooks/useDetectHeadless/useDetectHeadless";
// Components
import Button from "../../core/Button/Button";
import Preview from "../../Widget/Preview/Preview";
import Settings from "../../Widget/Settings/Settings";
import Headless from "../../Widget/Headless/Headless";
import CardContainer from "../../core/Card/Container/CardContainer";
import Customize from "../../Widget/Customize/Customize";

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

  // Page opened in OBS
  const headless = useDetectHeadless();
  if (headless) return <Headless />;
  // If the app is open in the browser
  return (
    <div className="flex flex-col gap-4">
      <WidgetSettingsDiv className="flex flex-col lg:flex-row gap-4 justify-center">
        <CardContainer>
          <Settings />
        </CardContainer>

        <CardContainer>
          <Preview style={{ withBackground: false }} />
        </CardContainer>
      </WidgetSettingsDiv>

      <CardContainer>
        <Customize />
      </CardContainer>

      <CardContainer>
        <div className="flex flex-row gap-2">
          <Button>Copy</Button>
          <div className="flex items-center bg-base-light w-full rounded-md px-4 py-2 h-full justify-center text-gray-400">
            {pageHref}
          </div>
        </div>
      </CardContainer>
    </div>
  );
}

const WidgetSettingsDiv = styled.div``;

export default WidgetSettings;
