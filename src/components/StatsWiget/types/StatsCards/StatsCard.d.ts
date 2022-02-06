export interface StatsCard {
  rows: StatsCardRow[];
  tags: string[];
}

export interface StatsCardRow {
  blocks: StatsBlock[];
}

export interface StatsBlock {
  rows: StatsBlockRow[];
  tags: string[];
}

export interface StatsBlockRow {
  content: StatsBlockRowContent | StatsBlockRowContent[];
}

export interface StatsBlockRowContent {
  tags: string[];
  content: any;
  isLocalized: boolean;
}
