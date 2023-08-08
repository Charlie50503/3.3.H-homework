import { EState } from "../enum/state.enum";
import { State } from "./state";

export class Poisoned extends State {
  public getDurationRound(): number {
    return 3;
  }

  public getName(): string {
    return "中毒";
  }

  public onRoundStart(): void {
    this.role.onDamage(15);
  }

  public getType(): EState {
    return EState.Poisoned;
  }
}
