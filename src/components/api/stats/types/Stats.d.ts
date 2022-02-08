import BlockRowContent from "../../../Widget/core/types/BlockRowContent";
import Card from "../../../Widget/core/types/Card";

export default interface Stats {
  cards?: Card[];
  statusIcons?: BlockRowContent[];
  failedCards?: string[];
  stylePreset?: string;
}
