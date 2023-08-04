import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetOfBankCellsComponent } from './set-of-bank-cells/set-of-bank-cells.component';

@NgModule({
  declarations: [AppComponent, SetOfBankCellsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
