import { Injectable } from '@angular/core';
import {
  CellType,
  ICell,
  ICellsByType,
  IEntity,
} from '../interfaces/bank-cells.interfaces';
import { cellTypesMap } from '../constance';
import { BehaviorSubject } from 'rxjs';
import { KeyGenerateService } from './key-generate.service';
import {FindListKeyService} from "./find-list-key.service";

@Injectable({
  providedIn: 'root',
})
export class CellsContentService {
  private cellsMapByTypes: ICellsByType<IEntity>[] = [];
  private cellsMapByTypes$ = new BehaviorSubject<ICellsByType<ICell>[]>([]);

  constructor(
    private keyGenerateService: KeyGenerateService, private findListKeyService: FindListKeyService
  ) {
    cellTypesMap.forEach((el, index) => {
      this.cellsMapByTypes.push({ typeName: el.typeName, cells: [] });
      for (let i = 1; i <= el.count; i++) {
        this.cellsMapByTypes[index].cells.push({
          id: i,
          state: 'open',
          numberOfCell: i,
        });
      }
    });
    this.updateList();
  }

  getCellsByTypesObservable() {
    return this.cellsMapByTypes$;
  }

  private updateList() {
    this.cellsMapByTypes$.next(this.cellsMapByTypes);
  }

  updateCellState(
    typeOfCell: CellType,
    numberOfCell: number,
    content: IEntity,
  ): string {
    const cellsMapByType = this.cellsMapByTypes.find(
      (type) => type.typeName === typeOfCell,
    );
    const foundCell = cellsMapByType?.cells.find(
      (cell) => cell.numberOfCell === numberOfCell,
    );
    if (foundCell) {
      foundCell.textContent = content.textContent;
      foundCell.imageContent = content.imageContent;
      foundCell.title = content.title;
      foundCell.keyCell = this.keyGenerateService.generateFormattedRandomKey();
      this.findListKeyService.addKey(foundCell.keyCell)
      foundCell.state = 'close';
      this.updateList();
      return foundCell.keyCell;

    } else {
      return '0';
    }
  }

  getCellContent(typeOfCell: CellType, numberOfCell: number, keyCell: string): IEntity | null {
    const cellsMapByType = this.cellsMapByTypes.find(
      (type) => type.typeName === typeOfCell,
    );
    const foundCell = cellsMapByType?.cells.find(
      (cell) => cell.numberOfCell === numberOfCell,
    );
    if (foundCell) {
      if (foundCell.keyCell === keyCell.trim()) {
        foundCell.state = 'open';
        this.findListKeyService.deleteKey(foundCell.keyCell)
        this.updateList();
        return {
          imageContent: foundCell.imageContent,
          textContent: foundCell.textContent,
          title: foundCell.title,
        } as IEntity;
      }
      return null;
    } else {
      return null;
    }
  }
}
