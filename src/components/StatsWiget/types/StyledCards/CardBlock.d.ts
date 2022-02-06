import { ElementOptions, ElementStyle } from "./ElementOptions";

export default interface CardBlock extends ElementOptions, ElementStyle {
  rows: BlockRow[];
  tags: string[];
}
