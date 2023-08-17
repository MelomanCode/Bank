import {Component, Input} from '@angular/core';
import {CellType, Entity, IEntity} from "../../interfaces/bank-cells.interfaces";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.css'],
})
export class ContentModalComponent {
  @Input() type: CellType = 'smallCells';
  @Input() editableEntity: IEntity = new Entity();

  constructor(public modalRef: NgbModalRef) {}
}
