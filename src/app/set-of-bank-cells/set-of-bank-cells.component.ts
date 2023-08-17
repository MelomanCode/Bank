import { Component, OnInit } from '@angular/core';
import { cellTypesMap } from '../constance';
import {
  CellInterface,
  ICellsByType,
} from '../interfaces/bank-cells.interfaces';

@Component({
  selector: 'app-set-of-bank-cells',
  templateUrl: './set-of-bank-cells.component.html',
  styleUrls: ['./set-of-bank-cells.component.css'],
})
export class SetOfBankCellsComponent implements OnInit {
  public cellsMapByTypes: ICellsByType<CellInterface>[] = [];

  ngOnInit() {
    cellTypesMap.forEach((el, index) => {
      this.cellsMapByTypes.push({ typeName: el.typeName, cells: [] });
      for (let i = 1; i <= el.count; i++) {
        this.cellsMapByTypes[index].cells.push({
          state: 'open',
          numberOfCell: i,
        });
      }
    });
    console.log(this.cellsMapByTypes);
  }
}
