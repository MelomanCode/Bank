import { Component, Input } from '@angular/core';
import { CellsContentService } from '../../services/cells-content.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CellType } from '../../interfaces/bank-cells.interfaces';
import {ContentModalComponent} from "../content-modal/content-modal.component";

@Component({
  selector: 'app-key-modal',
  templateUrl: './key-modal.component.html',
  styleUrls: ['./key-modal.component.css'],
})
export class KeyModalComponent {
  @Input() type: CellType = 'smallCells';
  @Input() numberOfCell: number = 0;

  key: string = '';
  constructor(
    private cellsContentService: CellsContentService,
    private activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {}

  submitKey() {
    const content = this.cellsContentService.getCellContent(
      this.type,
      this.numberOfCell,
      this.key,
    );
    if (content) {
      this.close()
      const modalRef = this.modalService.open(ContentModalComponent, {size: 'xl'})
      modalRef.componentInstance.editableEntity = content;
      modalRef.componentInstance.type = this.type;
    }

  }

  close() {
    this.activeModal.dismiss();
  }
}
