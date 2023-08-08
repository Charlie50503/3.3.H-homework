import { MapObject } from './mapObject/mapObject';
import { Position } from './position';

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
    var map: (MapObject | null)[][] = new Array(height)
      .fill(null)
      .map(() => new Array(width).fill(null));
    return map;
  }

  public printMap() {
    let rowIndexes = '  ';
    this.grid[0].forEach((cell, columnIndex) => {
      rowIndexes += columnIndex + ' ';
    });
    console.log(rowIndexes);
    this.grid.forEach((row, rowIndex) => {
      let rowStr = rowIndex + ' ';
      row.forEach((cell, columnIndex) => {
        if (cell) {
          // 若該格子有角色，則先印出角色
          rowStr += cell.getSymbol() + ' ';
        } else {
          // 若該格子什麼都沒有，則印出空格
          rowStr += '- ';
        }
      });
      console.log(rowStr);
    });
  }

  getObject(position: Position) {
    return this.grid[position.row][position.col];
  }

  setObject(mapObject: MapObject) {
    this.grid[mapObject.position.row][mapObject.position.col] = mapObject;
    const key = `${mapObject.position.row}-${mapObject.position.col}`;
    this.occupiedPositions.add(key);
  }

  removeObject(position: Position) {
    if (this.grid[position.row][position.col]) {
      this.grid[position.row][position.col] = null;
      this.occupiedPositions.delete(`${position.row}-${position.col}`);
    } else {
      throw Error('沒找到可以刪除的物件');
    }
  }

  isPositionOccupied(position: Position) {
    return this.grid[position.row][position.col] !== null;
  }

  getRowSize() {
    return this.rolSize
  }

  getColumnSize() {
    return this.colSize
  }
}
