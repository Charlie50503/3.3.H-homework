import { GameMap } from "../../../gameMap";
import { EDirection } from "../../../enum/direction.enum";
import { Position } from "../../../position";
import { Role } from "../role";
import { Direction } from "../../../direction";
import { readlineService } from "../../../services/readline.service";
import { readlineValidation } from "../../../services/readline.validation";
import { MoveActionCommand, MoveStrategy } from "../moveStrategy/moveStrategy";
import { EMapObjectSymbol } from "../../../enum/mapObjectSymbol.enum";
import { CharacterUpAttackStrategy } from "./attackStrategy/characterUpAttackStrategy";
import { CharacterDownAttackStrategy } from "./attackStrategy/characterDownAttackStrategy";
import { CharacterRightAttackStrategy } from "./attackStrategy/characterRightAttackStrategy";
import { CharacterLeftAttackStrategy } from "./attackStrategy/characterLeftAttackStrategy";
import { MoveNormalStrategy } from "../moveStrategy/MoveNormalStrategy";

export class Character extends Role {

  private direction: Direction;
  constructor(id: string, position: Position, map: GameMap) {
    super(id, position, map);
    this.direction = new Direction();
    this.direction.setCurrentDirection(this.direction.randomDirection());
  }

  public getName(): string {
    return "英雄";
  }
  public getSymbol(): EMapObjectSymbol {
    return EMapObjectSymbol.character;
  }
  protected getMaxHp(): number {
    return 300;
  }

  public async attack(): Promise<void> {
    console.log(this.getName() + `朝 ${this.direction} 方向發出攻擊`);
    const attackStrategy = this.handleAttackStrategy(this.direction.getCurrentDirection());
    attackStrategy.attack();
  }

  public async takeTurn(): Promise<void> {
    console.log("0:移動,1:攻擊");
    const action = await readlineService.getValidUserInput(
      "請輸入英雄行為:",
      readlineValidation.isValidHeroActionOperation
    );
    if (action === "0") {
      await this.handleMove(new MoveNormalStrategy(this));
    } else if (action === "1") {
      await this.state.onAttack();
    }
  }

  public printState() {
    console.log(`${this.getName()} HP: ${this.hp}, 狀態: ${this.state.getName()}`);
  }

  public async handleMove(moveStrategy: MoveStrategy) {
    moveStrategy.printMoveableDirections();
    const action = await readlineService.getValidUserInput(
      "請輸入移動方向:",
      readlineValidation.isValidHeroMoveOperation
    );
    moveStrategy.handleMove(action as MoveActionCommand);
  }

  private handleAttackStrategy(direction: EDirection) {
    // 找出地圖中距離主角最近的障礙物
    switch (direction) {
      case EDirection.Up:
        return new CharacterUpAttackStrategy(this.position, this.map);
      case EDirection.Down:
        return new CharacterDownAttackStrategy(this.position, this.map);
      case EDirection.Left:
        return new CharacterLeftAttackStrategy(this.position, this.map);
      case EDirection.Right:
        return new CharacterRightAttackStrategy(this.position, this.map);
    }
  }
}
