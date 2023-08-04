export type CellInterface = ISmallCells | IBigCells;
export type CellType = 'smallCells' | 'bigCells'

export interface ICell {
  numberOfCell?:number;
  keyCell?: string;
  state?: boolean;
}

export interface IBigCells extends ICell{
  imageContent?: string;
}

export interface ISmallCells extends ICell {
  textContent?: string;
}

export interface CellTypeInfo<T> {
  typeName: CellType;
  count: number;
  cell: T;
}

export interface ICellsByType<T> {
  typeName: CellType;
  cells: T[];
}


