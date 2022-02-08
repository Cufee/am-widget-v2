export interface GenerateSettings {
  player: Player;
  locale: string;
  stylePreset: string;

  options: Options;
  lastUsed: string;
}
export interface Options {
  locale: string;
  Player: PlayerOptions;
  AccountStatus: AccountStatusOptions;
  Notifications: NotificationsOptions;
  Challenges: ChallengesOptions;
  RatingBattles: OverViewOptions;
  RegularBattles: OverViewOptions;
  VehiclesFull: VehiclesOptions;
  VehiclesSlim: VehiclesOptions;
}
export interface AccountStatusOptions {
  Include: boolean;
  Limit: number;
}
export interface NotificationsOptions {
  Include: boolean;
  Blocks?: null;
}
export interface ChallengesOptions {
  Include: boolean;
  Limit: number;
  Blocks?: null;
  Types?: null;
}
export interface PlayerOptions {
  Include: boolean;
  WithName: boolean;
  WithClanTag: boolean;
  WithPins: boolean;
}
export interface OverViewOptions {
  Include: boolean;
  WithTitle: boolean;
  WithLabels: boolean;
  WithAllTimeStats: boolean;
  Blocks?: string[] | null;
  Type: string;
}
export interface VehiclesOptions {
  Include: boolean;
  Limit: number;
  WithVehicleTier: boolean;
  WithVehicleName: boolean;
  WithAllTimeStats: boolean;
  WithLabels: boolean;
  Offset: number;
  Blocks?: string[] | null;
}

export interface Player {
  id: number;
  realm: string;
}
