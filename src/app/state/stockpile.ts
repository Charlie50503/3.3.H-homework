import { Erupting } from "./erupting";
import { EState } from "../enum/state.enum";
import { State } from "./state";

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

  onRoundStart(): void {}

  public afterRoundEnd(): void {
    this.role.setState(new Erupting(this.role));
  }
}
