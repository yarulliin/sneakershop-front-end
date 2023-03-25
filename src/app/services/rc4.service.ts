import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Rc4Service extends BehaviorSubject<number[]> {
  constructor() {
    super([]);
  }

  public encrypt(input: string): string {
    const byteStream = this.byteStreamGenerator(this.value.slice(0));

    return [...input].reduce((prev: string, curr: string, i: number) =>
      prev + ('00' + (input.charCodeAt(i) ^ byteStream.next().value).toString(16)).substr(-2), '');
  }

  public decrypt(input: string): string {
    const byteStream = this.byteStreamGenerator(this.value.slice(0));

    return input.match(/[a-z0-9]{2}/gi)!.reduce((prev: string, curr: string) =>
      prev + String.fromCharCode((parseInt(curr, 16) ^ byteStream.next().value)), '');
  }

  public keySetup(key: string): void {
    let j = 0;
    const K = [...Array(256).keys()];
    const convertedKey = this.convert(key);

    for (let i = 0; i < K.length; i++) {
      j = (j + K[i] + convertedKey[i % convertedKey.length]) % 256;
      [K[i], K[j]] = [K[j], K[i]];
    }

    this.next(K);
  }

  private convert(text: string): number[] {
    return [...text].map((el: string, i: number) => text.charCodeAt(i));
  }

  private *byteStreamGenerator(K: number[]): Generator<number> {
    let i = 0;
    let j = 0;

    while (true) {
      i = (i + 1) % 256;
      j = (j + K[i]) % 256;
      [K[i], K[j]] = [K[j], K[i]];

      yield (K[(K[i] + K[j]) % 256]);
    }
  }
}
