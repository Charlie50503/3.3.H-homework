import { Position } from "./../../position";
import { Normal } from "../../state/normal";
import { State } from "../../state/state";
import { MapObject } from "../mapObject";
import { EDirection } from "../../enum/direction.enum";
import { GameMap } from "../../gameMap";
import { MoveStrategy } from "./moveStrategy/moveStrategy";

export abstract class Role extends MapObject {
  protected hp: number;
  protected state: State;
  public isDead: boolean = false;
  protected map: GameMap;
  constructor(id: string, position: Position, map: GameMap) {
    super(id, position);
    this.map = map;
    this.hp = this.getMaxHp();
    this.state = new Normal(this);
  }

  public abstract getName(): string;
  public abstract attack(): void;
  public abstract takeTurn(): void;
  protected abstract getMaxHp(): number;

  public onDamage(damage: number) {
    console.log(`${this.getName()}受到${damage}點傷害`);
    this.hp -= damage;

    if (this.hp <= 0) {
      this.dead();
      console.log(`${this.getName()} 死亡!`);
    }
  }

  public onHealing(heal: number) {
    this.hp += heal;
    console.log(`${this.getName()} 恢復了${heal}HP`);
    if (this.hp > this.getMaxHp()) {
      console.log(`${this.getName()} 已經滿血`);
      this.hp = this.getMaxHp();
    }
  }

  public setState(state: State) {
    this.state = state;
  }

  public getState(): State {
    return this.state;
  }

  protected dead() {
    this.isDead = true;
  }

  public move(direction: EDirection) {
    const nextPosition = this.position.findNextPosition(direction);
    this.position.updatePosition(nextPosition);
  }

  public getMap() {
    return this.map;
  }

  public abstract handleMove(moveStrategy: MoveStrategy): Promise<void>;
}
