import { Component, Input, OnInit } from '@angular/core';
import { CellInterface, CellType } from '../interfaces/bank-cells.interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CellFormModalComponent } from '../modals/cell-form-modal/cell-form-modal.component';
import { KeyModalComponent } from '../modals/key-modal/key-modal.component';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  @Input() typeName: CellType = 'smallCells';
  @Input() cell: CellInterface = {};

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    console.log(this.typeName);
  }

  openModal() {
    const modalRef = this.modalService.open(CellFormModalComponent, {
      size: 'xl',
    });
    modalRef.componentInstance.type = this.typeName;
    modalRef.componentInstance.numberOfCell = this.cell.numberOfCell;
    modalRef.result.then(
      () => {},
      () => {},
    );
  }

  openKeyModal() {
    const modalRef = this.modalService.open(KeyModalComponent, { size: 'lg' });
    modalRef.componentInstance.type = this.typeName;
    modalRef.componentInstance.numberOfCell = this.cell.numberOfCell;
  }
}
