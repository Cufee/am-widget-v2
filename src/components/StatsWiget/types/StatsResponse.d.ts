import { StatsCard } from "./StatsCards/StatsCard";
import BlockRowContent from "./StyledCards/BlockRowContent";

export default interface StatsResponse {
  cards?: StatsCard[];
  status_icons?: BlockRowContent[];
  failed_cards?: string[];
}
