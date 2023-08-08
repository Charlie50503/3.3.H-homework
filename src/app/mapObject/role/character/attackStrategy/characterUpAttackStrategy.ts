import { EMapObjectSymbol } from "../../../../enum/mapObjectSymbol.enum";
import { Monster } from "../../monster";
import { Character } from "../character";
import { characterAttackStrategy as CharacterAttackStrategy } from "./characterAttackStrategy";
import { Position } from "../../../../position";
import { GameMap } from "../../../../gameMap";
export class CharacterUpAttackStrategy implements CharacterAttackStrategy {
  startPosition: Position;
  map: GameMap;
  constructor(startPosition: Position, map: GameMap) {
    this.startPosition = startPosition;
    this.map = map;
  }

  attack() {
    let startRow = this.startPosition.getRow();
    let startCol = this.startPosition.getColumn();
    for (let index = startRow - 1; index >= 0; index--) {
      if (this.map.grid[index][startCol]?.getSymbol() === EMapObjectSymbol.obstacle) {
        break;
      } else if (this.map.grid[index][startCol]?.getSymbol() === EMapObjectSymbol.monster) {
        (this.map.grid[index][startCol] as Monster).getState().onDamage(1);
      }
    }
  }
}
