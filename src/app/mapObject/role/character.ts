import { EDirection } from './../../enum/direction.enum';
import { Position } from '../../position';
import { Role } from './role';
import { Direction } from '../../direction';

export class Character extends Role {
  direction: Direction;
  constructor(id: string, position: Position) {
    super(id, position);
    this.direction = new Direction();
    this.direction.setCurrentDirection(this.direction.randomDirection());
  }

  getName(): string {
    return '英雄';
  }
  public getSymbol(): string {
    return this.direction.getCurrentDirection();
  }
  protected getMaxHp(): number {
    return 300;
  }

  public takeTurn(): void {}

  public printState(){
    console.log(`${this.getName()} HP: ${this.hp}, 狀態: ${this.state.getName()}`);
  }
}
