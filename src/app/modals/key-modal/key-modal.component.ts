import {Component} from '@angular/core';
import {CellsContentService} from "../../services/cells-content.service";

@Component({
  selector: 'app-key-modal',
  templateUrl: './key-modal.component.html',
  styleUrls: ['./key-modal.component.css'],
})
export class KeyModalComponent {
  constructor(public cellsContentService: CellsContentService) {
  }


}
