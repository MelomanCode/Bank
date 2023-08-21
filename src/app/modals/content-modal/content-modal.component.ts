import {Component, Input} from '@angular/core';
import {CellType, Entity, IEntity} from "../../interfaces/bank-cells.interfaces";



@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.css'],
})
export class ContentModalComponent {
  @Input() type: CellType = 'smallCells';
  @Input() editableEntity: IEntity = new Entity();

}
