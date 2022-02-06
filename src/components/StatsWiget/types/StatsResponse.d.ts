import BlockRowContent from "./BlockRowContent";
import Card from "./Card";

export default interface StatsResponse {
  cards?: Card[];
  statusIcons?: BlockRowContent[];
  failedCards?: string[];
  styleProfile?: string;
}
