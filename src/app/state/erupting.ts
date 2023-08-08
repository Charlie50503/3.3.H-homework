import { EState } from '../enum/state.enum';
import { State } from './state';

export class Erupting extends State {
  public getName(): string {
    return '爆發';
  }

  protected getDurationRound(): number {
    return 3;
  }

  public getType(): EState {
    return EState.Erupting;
  }

  public onRoundStart(): void {}

  public onTurn(): void {}
}
