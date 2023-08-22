import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetOfBankCellsComponent } from './set-of-bank-cells/set-of-bank-cells.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CellComponent } from './cells/cell.component';
import { CellFormModalComponent } from './modals/cell-form-modal/cell-form-modal.component';
import {KeyModalComponent} from "./modals/key-modal/key-modal.component";
import {ContentModalComponent} from "./modals/content-modal/content-modal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BankOfKeyModalComponent} from "./modals/bank-of-key-modal/bank-of-key-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    SetOfBankCellsComponent,
    CellComponent,
    CellFormModalComponent,
    KeyModalComponent,
    ContentModalComponent,
    BankOfKeyModalComponent
  ],
  imports: [BrowserModule, NgbModule, ReactiveFormsModule, FormsModule],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
