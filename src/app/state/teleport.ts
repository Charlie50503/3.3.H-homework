import { EState } from "../enum/state.enum";
import { State } from "./state";

export class Teleport extends State {
  public getName(): string {
    return "瞬身";
  }

  protected getDurationRound(): number {
    return 1;
  }

  public getType(): EState {
    return EState.Teleport;
  }

  public onRoundStart(): void {}

  public afterRoundEnd(): void {
    // TODO 隨機傳送
  }
}
