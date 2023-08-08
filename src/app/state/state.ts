import { EState } from '../enum/state.enum';
import { Role } from '../mapObject/role/role';
import { Normal } from './normal';

export abstract class State {
  roundCount: number = 0;
  role: Role;

  constructor(role: Role) {
    this.role = role;
  }

  public abstract getName(): string;
  protected abstract getDurationRound(): number;
  public enterState() {
    console.log(this.role.getName(), '進入', this.getName(), '狀態');
  }
  public abstract onRoundStart(): void;
  public onDamage(damage: number) {
    this.role.onDamage(damage);
  }
  public abstract onTurn(): void;
  public onAttack() {
    this.role.attack();
  }
  public afterRoundEnd() {}

  public onRoundEnd() {
    this.roundCount++;
    if (this.roundCount >= this.getDurationRound()) {
      this.role.setState(new Normal(this.role));
    }
  }

  public abstract getType(): EState;
}
