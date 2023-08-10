import { EDirection } from "../../../../enum/direction.enum";
import { EMapObjectSymbol } from "../../../../enum/mapObjectSymbol.enum";
import { GameMap } from "../../../../gameMap";
import { Position } from "../../../../position";
import { Monster } from "../../monster";
import { AttackHandler } from "./attackHandler";

export class AttackLeftHandler extends AttackHandler {
  constructor(next: AttackHandler | null) {
    super(next);
  }

  protected match(direction: EDirection) {
    return direction === EDirection.Left
  }

  protected doHandling(startPosition: Position, map: GameMap) {
    let startRow = startPosition.getRow();
    let startCol = startPosition.getColumn();

    for (let index = startCol - 1; index >= 0; index--) {
      if (map.grid[startRow][index]?.getSymbol() === EMapObjectSymbol.obstacle) {
        break;
      } else if (map.grid[startRow][index]?.getSymbol() === EMapObjectSymbol.monster) {
        (map.grid[startRow][index] as Monster).getState().onDamage(1);
      }
    }
  }
}