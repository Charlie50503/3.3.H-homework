import { EMapObjectSymbol } from "../../enum/mapObjectSymbol.enum";
import { ETreasureType } from "../../enum/treasureType.enum";
import { MapObject } from "../mapObject";
import { Role } from "../role/role";

export abstract class Treasure extends MapObject {
  static probability: number;

  public abstract getName(): string;
  public getSymbol() {
    return EMapObjectSymbol.treasure;
  }
  public onTouch(toucher: Role, touchee: Treasure) {
    if (touchee.getType() === this.getType()) {
      this.getEffect(toucher);
    }
  }

  public abstract getType(): ETreasureType;
  protected abstract getEffect(toucher: Role): void;
}
