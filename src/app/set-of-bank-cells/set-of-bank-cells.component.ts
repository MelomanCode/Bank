import { Component, OnInit } from '@angular/core';

import {CellsContentService} from "../services/cells-content.service";
import {BehaviorSubject} from "rxjs";
import {ICell, ICellsByType} from "../interfaces/bank-cells.interfaces";

@Component({
  selector: 'app-set-of-bank-cells',
  templateUrl: './set-of-bank-cells.component.html',
  styleUrls: ['./set-of-bank-cells.component.css'],
})
export class SetOfBankCellsComponent implements OnInit {
  constructor( private cellsContentService: CellsContentService) {}

  public cellsMapByTypes$ = new BehaviorSubject<ICellsByType<ICell>[]>([]);

  ngOnInit() {
  this.cellsMapByTypes$ = this.cellsContentService.getCellsByTypesObservable()
    setInterval(() => {
      console.log(this.cellsMapByTypes$)
    }, 5000)

  }


}
