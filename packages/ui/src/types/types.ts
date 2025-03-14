export interface IPorcuProps {
  animate?: boolean;
  sleep?: boolean;
  size?: number;
  animationSpeed?: number;
  x?: number;
  y?: number;
}

export interface IGameState {
  age: number;
  health: number;
  hunger: number;
  happiness: number;
  energy: number;
}

export type IRoom = 'bedroom' | 'kitchen' | 'livingroom';
