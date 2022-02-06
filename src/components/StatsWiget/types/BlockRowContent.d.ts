export interface BlockRowContent {
  type: "text" | "image" | "icon";
  isLocalized: boolean;
  tags: string[];
  content: TextContent | ImageContent | IconContent;
}

export type TextContent = string;
export type ImageContent = {
  url: string;
  width?: number;
  height?: number;
};
export type IconContent = {
  name: string;
  size?: number;
  color?: string;
};
