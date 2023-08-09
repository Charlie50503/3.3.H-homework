import { EState } from "../enum/state.enum";
import { State } from "./state";
import { Normal } from "./normal";
import { Erupting } from "./erupting";

export class Stockpile extends State {
  getName(): string {
    return "蓄力";
  }

  protected getDurationRound(): number {
    return 2;
  }

  getType(): EState {
    return EState.Stockpile;
  }

  public override onDamage(damage: number): void {
    this.role.setState(new Normal(this.role));
    this.role.onDamage(damage);
  }

  public override onRoundEnd(): void {
    this.roundCount++;
    if (this.roundCount >= this.getDurationRound()) {
      this.role.setState(new Erupting(this.role));
    }
  }
}
