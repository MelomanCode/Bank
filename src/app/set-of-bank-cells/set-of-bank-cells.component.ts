import { Component, Input, OnInit } from '@angular/core';

import { CellsContentService } from '../services/cells-content.service';
import { BehaviorSubject } from 'rxjs';
import {
  CellType,
  ICell,
  ICellsByType,
} from '../interfaces/bank-cells.interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BankOfKeyModalComponent } from '../modals/bank-of-key-modal/bank-of-key-modal.component';

@Component({
  selector: 'app-set-of-bank-cells',
  templateUrl: './set-of-bank-cells.component.html',
  styleUrls: ['./set-of-bank-cells.component.css'],
})
export class SetOfBankCellsComponent implements OnInit {
  @Input() type: CellType = 'smallCells';
  @Input() numberOfCell: number = 0;
  constructor(
    private cellsContentService: CellsContentService,
    private modalService: NgbModal,
  ) {}

  public cellsMapByTypes$ = new BehaviorSubject<ICellsByType<ICell>[]>([]);

  ngOnInit() {
    this.cellsMapByTypes$ =
      this.cellsContentService.getCellsByTypesObservable();
  }

  openBankKeyModal() {
    this.modalService.open(BankOfKeyModalComponent, { size: 'xl' });
  }
}
