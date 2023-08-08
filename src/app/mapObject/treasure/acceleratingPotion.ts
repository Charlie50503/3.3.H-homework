import { ETreasureType } from '../../enum/treasureType.enum';
import { Accelerated } from '../../state/accelerated';
import { Invincible } from '../../state/invincible';
import { Role } from '../role/role';
import { Treasure } from './treasure';

export class AcceleratingPotion extends Treasure {
  static readonly probability: number = 0.1;

  public getName(): string {
    return '加速藥水';
  }

  protected getEffect(toucher: Role): void {
    toucher.setState(new Accelerated(toucher));
  }

  getType() {
    return ETreasureType.AcceleratingPotion;
  }
}
