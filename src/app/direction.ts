import { EDirection } from './enum/direction.enum';
export class Direction {
  currentDirection!: EDirection;

  constructor() {
  }

  randomDirection(): EDirection {
    const directions = [EDirection.Up, EDirection.Down, EDirection.Left, EDirection.Right];
    const randIndex = Math.floor(Math.random() * directions.length);
    return directions[randIndex];
  }

  setCurrentDirection(direction: EDirection) {
    this.currentDirection = direction;
  }

  getCurrentDirection(): EDirection {
    return this.currentDirection;
  }
}
