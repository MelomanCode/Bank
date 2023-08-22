import {Component} from '@angular/core';
import {FindListKeyService} from "../../services/find-list-key.service";


@Component({
  selector: 'app-bank-of-key-modal',
  templateUrl: './bank-of-key-modal.component.html',
  styleUrls: ['./bank-of-key-modal.component.css'],
})
export class BankOfKeyModalComponent {

keysList: string[] = []
constructor(private findListKeyService: FindListKeyService) {
  this.keysList = this.findListKeyService.getKeyList()
}



}
