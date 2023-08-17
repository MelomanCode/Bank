import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetOfBankCellsComponent } from './set-of-bank-cells/set-of-bank-cells.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CellComponent } from './cells/cell.component';
import { CellFormModalComponent } from './modals/cell-form-modal/cell-form-modal.component';
import {KeyModalComponent} from "./modals/key-modal/key-modal.component";
import {ContentModalComponent} from "./modals/content-modal/content-modal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SetOfBankCellsComponent,
    CellComponent,
    CellFormModalComponent,
    KeyModalComponent,
    ContentModalComponent,
  ],
  imports: [BrowserModule, NgbModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
