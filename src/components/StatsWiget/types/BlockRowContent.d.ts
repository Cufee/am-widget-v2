export default interface BlockRowContent {
  type: "text" | "image";
  isLocalized: boolean;
  tags: string[];
  content: any;
}
