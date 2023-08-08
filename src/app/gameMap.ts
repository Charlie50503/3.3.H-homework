import { MapObject } from "./mapObject/mapObject";
import { Position } from "./position";

export class GameMap {
  rolSize: number;
  colSize: number;
  grid: (MapObject | null)[][];
  occupiedPositions: Set<string> = new Set();

  constructor(rowSize: number, colSize: number) {
    this.rolSize = rowSize;
    this.colSize = colSize;
    this.grid = this.generateMap(rowSize, colSize);
  }

  private generateMap(width: number, height: number) {
    var map: (MapObject | null)[][] = new Array(height).fill(null).map(() => new Array(width).fill(null));
    return map;
  }

  public printMap() {
    let rowIndexes = "  ";
    this.grid[0].forEach((cell, columnIndex) => {
      rowIndexes += columnIndex + " ";
    });
    console.log(rowIndexes);
    this.grid.forEach((row, rowIndex) => {
      let rowStr = rowIndex + " ";
      row.forEach((cell, columnIndex) => {
        if (cell) {
          // 若該格子有角色，則先印出角色
          rowStr += cell.getSymbol() + " ";
        } else {
          // 若該格子什麼都沒有，則印出空格
          rowStr += "- ";
        }
      });
      console.log(rowStr);
    });
  }

  public getObject(position: Position) {
    return this.grid[position.getRow()][position.getColumn()];
  }

  public setObject(mapObject: MapObject) {
    this.grid[mapObject.getPosition().getRow()][mapObject.getPosition().getColumn()] = mapObject;
    const key = `${mapObject.getPosition().getRow()}-${mapObject.getPosition().getColumn()}`;
    this.occupiedPositions.add(key);
  }

  public removeObject(position: Position) {
    if (this.grid[position.getRow()][position.getColumn()]) {
      this.grid[position.getRow()][position.getColumn()] = null;
      this.occupiedPositions.delete(`${position.getRow()}-${position.getColumn()}`);
    } else {
      throw Error("沒找到可以刪除的物件");
    }
  }

  public isPositionOccupied(position: Position) {
    return this.grid[position.getRow()][position.getColumn()] !== null;
  }

  public getRowSize() {
    return this.rolSize;
  }

  public getColumnSize() {
    return this.colSize;
  }
}
