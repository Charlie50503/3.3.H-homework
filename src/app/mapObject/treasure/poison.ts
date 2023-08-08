import { ETreasureType } from '../../enum/treasureType.enum';
import { Invincible } from '../../state/invincible';
import { Role } from '../role/role';
import { Treasure } from './treasure';

export class Poison extends Treasure {
  static readonly probability: number = 0.25;

  public getName(): string {
    return '毒藥';
  }

  protected getEffect(toucher: Role): void {
    toucher.setState(new Invincible(toucher));
  }

  getType() {
    return ETreasureType.SuperStar;
  }
}
