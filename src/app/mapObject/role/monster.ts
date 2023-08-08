import { EMapObjectSymbol } from '../../enum/mapObjectSymbol.enum';
import { Position } from '../../position';
import { Role } from './role';

export class Monster extends Role {
  constructor(id: string, position: Position) {
    super(id, position);
  }

  getName(): string {
    return '怪物';
  }

  public getSymbol(): string {
    return EMapObjectSymbol.monster;
  }

  takeTurn(): void {}

  attack(): void {}

  protected getMaxHp(): number {
    return 1;
  }
}
