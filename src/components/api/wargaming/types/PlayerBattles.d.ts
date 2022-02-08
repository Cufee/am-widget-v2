export interface ApiResponse {
  status: string;
  meta: Meta;
  data: Data;
}
export interface Meta {
  count: number;
}
export interface Data {
  [key: string]: Player;
}
export interface Player {
  statistics: Statistics;
  last_battle_time: number;
}
export interface Statistics {
  rating: StatsFrame;
  all: StatsFrame;
}
export interface StatsFrame {
  battles: number;
}

export interface PlayerBattles {
  rating: number;
  random: number;
  lastBattleTime: number;
}
