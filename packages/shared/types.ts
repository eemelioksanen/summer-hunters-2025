export interface IGameState {
  age: number;
  health: number;
  hunger: number;
  happiness: number;
  energy: number;
}

export interface ICharacter extends IGameState {
  id: number;
  name: string;
}
