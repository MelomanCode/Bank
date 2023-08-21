import {Component, Input, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CellType,
  Entity, ICell,
  IEntity,
} from '../../interfaces/bank-cells.interfaces';
import { KeyGenerateService } from '../../services/key-generate.service';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-cell-form-modal',
  templateUrl: './cell-form-modal.component.html',
  styleUrls: ['./cell-form-modal.component.css'],
})
export class CellFormModalComponent implements OnInit {
  @Input() type: CellType = 'smallCells';
  @Input() editableEntity: IEntity = new Entity();

  public formGroup: FormGroup;
  private key: ICell = {};

  constructor(
    private fb: FormBuilder,
    private keyGenerateService: KeyGenerateService,
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
    if (this.editableEntity) {
      this.formGroup.patchValue(this.editableEntity);
    }
  }

  public getIsAccessControl(controlName: string): boolean {
    return this.formGroup.get(controlName) !== null;
  }

  public submitData(): void {
    const data = this.formGroup.getRawValue();
    if (data) {
      this.generateAndStoreKey();
      this.activeModal.close();
    }
  }

  generateAndStoreKey() {
    this.key.keyCell = this.keyGenerateService.generateFormattedRandomKey();
    console.log(this.key.keyCell)
  }
}
