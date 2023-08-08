import { EState } from '../enum/state.enum';
import { State } from './state';

export class Normal extends State {
  protected getDurationRound(): number {
    return 99999;
  }

  public getEffect(): void {}

  public getName(): string {
    return '正常';
  }

  public onRoundStart(): void {}

  public onTurn(): void {}

  public getType(): EState {
    return EState.Normal;
  }
}
