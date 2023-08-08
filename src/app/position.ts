import { EDirection } from './enum/direction.enum';

export class Position {
  row: number;
  col: number;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  equals(other: Position): boolean {
    return this.row === other.row && this.col === other.col;
  }

  updatePosition(row: number, col: number) {
    this.row = row;
    this.col = col;
  }
  public findNextPosition(direction: EDirection) {
    let row = this.row;
    let col = this.col;
    switch (direction) {
      case EDirection.Up:
        col = col - 1;
        break;
      case EDirection.Down:
        col = col + 1;
        break;
      case EDirection.Left:
        row = row - 1;
        break;
      case EDirection.Right:
        row = row + 1;
        break;
    }
    return new Position(row, col);
  }
}
