import { Component, Input, ViewChild } from '@angular/core';
import { CellInterface, CellType } from '../interfaces/bank-cells.interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {KeyGenerateService} from "../services/key-generate.service";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent {
  @ViewChild('content') content: any;

  @Input() typeName: CellType = 'smallCells';
  @Input() cell: CellInterface = {};

  public generatedKey: string = '';

  constructor(
    private keyGeneratorService: KeyGenerateService,
    private modalService: NgbModal,
  ) {}

  generateKey() {
    this.generatedKey = this.keyGeneratorService.generateFormattedRandomKey();
  }

  openLg() {
    this.modalService.open(this.content, { size: 'lg' });
  }
}
