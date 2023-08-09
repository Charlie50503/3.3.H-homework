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
          rowStr += cell.printFlag() + " ";
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
    const row = position.getRow();
    const column = position.getColumn();

    // 檢查 row 和 column 是否在合理的範圍內
    if (row < 0 || row >= this.grid.length || column < 0 || column >= this.grid[row].length) {
      return false; // 或者你可以選擇拋出一個錯誤，取決於你的邏輯
    }

    const cellValue = this.grid[row][column];
    return cellValue != null;
  }

  public getRowSize() {
    return this.rolSize;
  }

  public getColumnSize() {
    return this.colSize;
  }
}
