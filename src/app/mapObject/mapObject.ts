import { Position } from '../position';

export abstract class MapObject {
  id: number;
  position: Position;

  constructor(id: number, position: Position) {
    this.id = id;
    this.position = position;
  }

  public abstract getName(): string;
  public abstract getSymbol(): string;
  public getPosition() {
    return this.position;
  }
}
