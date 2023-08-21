import { Injectable } from '@angular/core';
import {
  CellInterface,
  ICell,
  ICellsByType,
} from '../interfaces/bank-cells.interfaces';
import { cellTypesMap } from '../constance';
import { BehaviorSubject } from 'rxjs';
import { KeyGenerateService } from './key-generate.service';
import { ContentModalComponent } from '../modals/content-modal/content-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class CellsContentService {
  private cellsMapByTypes: ICellsByType<CellInterface>[] = [];
  private cellsMapByTypes$ = new BehaviorSubject<ICellsByType<ICell>[]>([]);

  inputKey: string = '';
  keyError: boolean = false;

  constructor(
    private keyGenerateService: KeyGenerateService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
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

  updateList() {
    this.cellsMapByTypes$.next(this.cellsMapByTypes);
  }

  confirmKey() {
    if (
      this.keyGenerateService.checkKey(this.inputKey)
    ) {
      this.keyError = false;
      this.activeModal.dismiss();
      this.modalService.open(ContentModalComponent, { size: 'xl' });
    } else {
      this.keyError = true;
    }
  }
}
