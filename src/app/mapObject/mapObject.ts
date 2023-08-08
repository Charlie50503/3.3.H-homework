import { Position } from '../position';

export abstract class MapObject {
  id: string;
  position: Position;

  constructor(id: string, position: Position) {
    this.id = id;
    this.position = position;
  }

  public abstract getName(): string;
  public abstract getSymbol(): string;
  public getPosition() {
    return this.position;
  }
}
