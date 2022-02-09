import { Location } from "react-router-dom";

export default function setSearchParams(
  location: Location,
  key: string,
  value: string
) {
  const search = new URLSearchParams(location.search);
  search.set(key, value);
  window.history.pushState({}, "", `?${search.toString()}`);
}
