import { EState } from '../enum/state.enum';
import { State } from './state';

export class Invincible extends State {
  public getName(): string {
    return '無敵';
  }

  public onDamage(damage: number) {
    console.log('角色屬於無敵狀態,無法受到傷害');
    this.role.onDamage(0);
  }

  public onRoundStart() {}

  protected getDurationRound(): number {
    return 2;
  }

  public getEffect(): void {}

  public onTurn(): void {}

  public getType(): EState {
    return EState.Invincible;
  }
}
