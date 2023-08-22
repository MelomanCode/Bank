import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyGenerateService {
  public generatedKey: string = '';

  generateFormattedRandomKey(): string {
    const groups = [];
    for (let i = 0; i < 4; i++) {
      const group = this.generateRandomKey(4);
      groups.push(group);
    }

    this.generatedKey = groups.join('-').trim();

    return groups.join('-').trim();
  }

  private generateRandomKey(length: number): string {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
}
