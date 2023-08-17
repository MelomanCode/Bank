import { Component } from '@angular/core';
import { KeyGenerateService } from '../../services/key-generate.service';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ContentModalComponent} from "../content-modal/content-modal.component";

@Component({
  selector: 'app-key-modal',
  templateUrl: './key-modal.component.html',
  styleUrls: ['./key-modal.component.css'],
})
export class KeyModalComponent {
  private generatedKey: string = '';
  inputKey: string = '';
  keyError: boolean = false;

  constructor(
    private keyGenerateService: KeyGenerateService,
    private modalService: NgbModal,
    public modalRef: NgbModalRef,
    private keyGeneratorService: KeyGenerateService,
  ) {}

  openModal(content: any) {
    this.modalRef = this.modalService.open(content);
    this.keyError = false;
  }

  confirmKey() {
    if (this.keyGenerateService.checkKey(this.inputKey)) {
      this.keyError = false;
      this.modalRef.dismiss();
      this.modalService.open(ContentModalComponent);

    } else {
      this.keyError = true;
    }
  }


}
