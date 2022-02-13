import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useDetectHeadless = () => {
  const location = useLocation();
  const [headless, setHeadless] = useState(false);
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const isOBSQuery = search.get("headless") === "true";
    if (navigator?.userAgent?.includes("OBS/") || isOBSQuery) {
      console.debug("OBS detected, setting headless mode");
      setHeadless(true);
    }
  }, [location.search]);

  return headless;
};
