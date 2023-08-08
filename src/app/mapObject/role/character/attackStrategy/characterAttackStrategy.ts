import { GameMap } from "../../../../gameMap";
import { Position } from "../../../../position";
export interface characterAttackStrategy {
  startPosition: Position;
  map: GameMap;
  attack(): void;
}
