import { EState } from '../enum/state.enum';
import { State } from './state';

export class Orderless extends State {
  public getName(): string {
    return '混亂';
  }

  public onRoundStart(): void {}

  protected getDurationRound(): number {
    return 3;
  }

  public getType(): EState {
    return EState.Orderless;
  }

  public onTurn(): void {}
}
