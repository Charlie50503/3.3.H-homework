import { Position } from './../../position';
import { Normal } from '../../state/normal';
import { State } from '../../state/state';
import { MapObject } from '../mapObject';

export abstract class Role extends MapObject {
  hp: number;
  state: State;
  public isDead: boolean = false;
  constructor(id: string, position: Position) {
    super(id, position);
    this.hp = this.getMaxHp();
    this.state = new Normal(this);
  }
  setState(state: State) {
    this.state = state;
  }

  public abstract getName(): string;

  public onDamage(damage: number) {
    this.hp -= damage;

    if (this.hp <= 0) {
      this.dead();
      console.log(`${this.getName()} 死亡!`);
    }
  }

  protected abstract getMaxHp(): number;

  protected dead() {
    this.isDead = true;
  }

  public attack() {}

  public onHealing(heal: number) {
    this.hp += heal;
    console.log(`${this.getName()} 恢復了${heal}HP`);
    if (this.hp > this.getMaxHp()) {
      console.log(`${this.getName()} 已經滿血`);
      this.hp = this.getMaxHp();
    }
  }

  public abstract takeTurn(): void;
}
