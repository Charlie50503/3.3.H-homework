import { EMapObjectSymbol } from "../enum/mapObjectSymbol.enum";
import { EState } from "../enum/state.enum";
import { GameMap } from "../gameMap";
import { Role } from "../mapObject/role/role";
import { State } from "./state";

export class Erupting extends State {
  public getName(): string {
    return "爆發";
  }

  protected getDurationRound(): number {
    return 3;
  }

  public getType(): EState {
    return EState.Erupting;
  }

  public override onAttack(): void {
    this.role.getMap().grid.forEach((row) => {
      row.forEach((cell) => {
        if (
          this.role.id !== cell?.id &&
          (cell?.getSymbol() === EMapObjectSymbol.monster || cell?.getSymbol() === EMapObjectSymbol.character)
        ) {
          (cell as Role).getState().onDamage(50);
        }
      });
    });
  }
}
