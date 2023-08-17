export type CellInterface = ISmallCells | IBigCells;
export type CellType = 'smallCells' | 'bigCells'

export interface ICell {
  numberOfCell?:number;
  keyCell?: string;
  state?: 'open' | 'close';
  title?: string;
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

export interface IEntity extends IBigCells, ISmallCells {}

export class Entity implements IEntity {
  textContent = '';
  imageContent = '';
  title = '';

  constructor(params?: IEntity) {
if (params) {
this.title = params.title || '';
this.imageContent = params.imageContent || '';
this.textContent = params.textContent || '';
}
  }
}


