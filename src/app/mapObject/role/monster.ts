import { EMapObjectSymbol } from "../../enum/mapObjectSymbol.enum";
import { GameMap } from "../../gameMap";
import { Position } from "../../position";
import { MoveActionCommand, MoveStrategy } from "./moveStrategy/moveStrategy";
import { Role } from "./role";

export class Monster extends Role {
  constructor(id: string, position: Position, map: GameMap) {
    super(id, position, map);
  }

  getName(): string {
    return "怪物";
  }

  public getSymbol(): EMapObjectSymbol {
    return EMapObjectSymbol.monster;
  }

  takeTurn(): void {}

  attack(): void {}

  protected getMaxHp(): number {
    return 1;
  }

  public async handleMove(moveStrategy: MoveStrategy) {
    const action = Math.random() < 0.5 ? "0" : "1";
    moveStrategy.handleMove(action as MoveActionCommand);
  }
}
