import { CellInterface, CellTypeInfo } from './interfaces/bank-cells.interfaces';

export const cellTypesMap: CellTypeInfo<CellInterface>[] = [
  { typeName: 'smallCells', count: 70, cell: {} },
  { typeName: 'bigCells', count: 30, cell: {} },
];
