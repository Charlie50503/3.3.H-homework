import { EState } from '../enum/state.enum';
import { Normal } from './normal';
import { State } from './state';

export class Accelerated extends State {
  public getName(): string {
    return '加速';
  }

  protected getDurationRound(): number {
    return 3;
  }

  public override onDamage(damage: number): void {
    this.role.onDamage(damage);
    this.role.setState(new Normal(this.role));
  }

  public getType(): EState {
    return EState.Accelerated;
  }

  public onTurn(): void {
    this.role.takeTurn();
    this.role.takeTurn();
  }

  public onRoundStart(): void {}
}
