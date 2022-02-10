export default function getDomainFromRealm(realm: string): string {
  switch (realm.toLocaleLowerCase()) {
    case "ru":
      return "api.wotblitz.ru";
    case "eu":
      return "api.wotblitz.eu";
    case "asia":
      return "api.wotblitz.asia";

    default:
      return "api.wotblitz.com";
  }
}
