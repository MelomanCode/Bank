import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CellType, IEntity } from '../../interfaces/bank-cells.interfaces';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CellsContentService } from '../../services/cells-content.service';

@Component({
  selector: 'app-cell-form-modal',
  templateUrl: './cell-form-modal.component.html',
  styleUrls: ['./cell-form-modal.component.css'],
})
export class CellFormModalComponent implements OnInit {
  @Input() type: CellType = 'smallCells';
  @Input() numberOfCell: number = 0;

  public formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cellsContentService: CellsContentService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
  ) {
    this.formGroup = this.fb.group({
      title: [''],
    });
  }

  ngOnInit() {
    if (this.type === 'smallCells') {
      this.formGroup.addControl(
        'textContent',
        new FormControl('', Validators.required),
      );
    } else if (this.type === 'bigCells') {
      this.formGroup.addControl(
        'imageContent',
        new FormControl('', Validators.required),
      );
    }
  }

  public getIsAccessControl(controlName: string): boolean {
    return this.formGroup.get(controlName) !== null;
  }

  public submitData(): void {
    const data: IEntity = this.formGroup.getRawValue();
    if (data) {
      this.activeModal.close();
      const key = this.cellsContentService.updateCellState(
        this.type,
        this.numberOfCell,
        {
          textContent: data.textContent,
          imageContent: data.imageContent,
          title: data.title,
        },
      );
      if (key !== '0') {
        this.openModalWithKey(key);
      }
    }
  }

  openModalWithKey(key: string) {
    this.modalService.open('Ваш ключ доступа:' + ' ' +  key, { size: 'lg' });
  }
}
