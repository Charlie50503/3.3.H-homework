import { EMapObjectSymbol } from "../../../../enum/mapObjectSymbol.enum";
import { Monster } from "../../monster";
import { characterAttackStrategy } from "./characterAttackStrategy";
import { GameMap } from "../../../../gameMap";
import { Position } from "../../../../position";
export class CharacterLeftAttackStrategy implements characterAttackStrategy {
  startPosition: Position;
  map: GameMap;
  constructor(startPosition: Position, map: GameMap) {
    this.startPosition = startPosition;
    this.map = map;
  }

  attack() {
    let startRow = this.startPosition.getRow();
    let startCol = this.startPosition.getColumn();

    for (let index = startCol - 1; index >= 0; index--) {
      if (this.map.grid[startRow][index]?.getSymbol() === EMapObjectSymbol.obstacle) {
        break;
      } else if (this.map.grid[startRow][index]?.getSymbol() === EMapObjectSymbol.monster) {
        (this.map.grid[startRow][index] as Monster).getState().onDamage(1);
      }
    }
  }
}
