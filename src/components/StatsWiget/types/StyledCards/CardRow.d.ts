import { ElementOptions, ElementStyle } from "./ElementOptions";

export default interface CardRow extends ElementOptions, ElementStyle {
  blocks: CardBlock[];
}
