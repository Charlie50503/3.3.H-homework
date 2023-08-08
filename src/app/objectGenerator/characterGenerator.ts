import { Character } from "../mapObject/role/character/character";
import { GameMap } from "../gameMap";
import { MapObject } from "../mapObject/mapObject";
import { Position } from "../position";
import { ObjectGenerator } from "./objectGenerator";

export class CharacterGenerator extends ObjectGenerator<Character> {
  constructor(map: GameMap) {
    super(map);
  }
  public generateObject(id: string, position: Position, map: GameMap): Character {
    return new Character(id, position, map);
  }
}
