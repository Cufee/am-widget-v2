import { ElementOptions, ElementStyle } from "./ElementOptions";

export default interface Card extends ElementOptions, ElementStyle {
  rows: CardRow[];
  tags: string[];
}
