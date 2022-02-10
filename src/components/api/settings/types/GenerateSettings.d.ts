export interface GenerateSettings {
  player: Player;
  locale: string;
  stylePreset: string;
  options: Options;
  lastUsed: string;
}
export interface Options {
  locale: string;
  player: PlayerOptions;
  accountStatus: AccountStatusOptions;
  notifications: NotificationsOptions;
  challenges: ChallengesOptions;
  ratingBattles: OverViewOptions;
  regularBattles: OverViewOptions;
  vehiclesFull: VehiclesOptions;
  vehiclesSlim: VehiclesOptions;
}
export interface AccountStatusOptions {
  include: boolean;
  limit: number;
}
export interface NotificationsOptions {
  include: boolean;
  blocks?: null;
}
export interface ChallengesOptions {
  include: boolean;
  limit: number;
  blocks?: null;
  types?: null;
}
export interface PlayerOptions {
  include: boolean;
  withName: boolean;
  withClanTag: boolean;
  withPins: boolean;
}
export interface OverViewOptions {
  include: boolean;
  withTitle: boolean;
  withLabels: boolean;
  withAllTimeStats: boolean;
  blocks?: string[] | null;
  type: string;
}
export interface VehiclesOptions {
  include: boolean;
  limit: number;
  withVehicleTier: boolean;
  withVehicleName: boolean;
  withAllTimeStats: boolean;
  withLabels: boolean;
  offset: number;
  blocks?: string[] | null;
}

export interface Player {
  id: number;
  name: string;
  realm: string;
}
