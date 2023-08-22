import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FindListKeyService {
 private keysList: string[] = []


  addKey(key: string){
   this.keysList.push(key)
  }

  getKeyList() {
   return this.keysList
  }

  deleteKey(key: string) {
   this.keysList = this.keysList.filter(keyCell => keyCell !== key)
  }
}
