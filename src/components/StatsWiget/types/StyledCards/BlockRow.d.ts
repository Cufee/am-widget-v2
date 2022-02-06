import { ElementOptions, ElementStyle } from "./ElementOptions";

export default interface BlockRow extends ElementOptions, ElementStyle {
  content: BlockRowContent[];
}
