import BlockRowContent from "./BlockRowContent";
import Card from "./Card";

export default interface StatsResponse {
  cards?: Card[];
  status_icons?: BlockRowContent[];
  failed_cards?: string[];
}
