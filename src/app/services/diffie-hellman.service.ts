import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiffieHellmanService {
  public generateNumber(B: number, a: number, p: number): number {
    return this.modPow(B, a, p);
  }

  public rnd(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  private modPow(a: number, b: number, p: number): number {
    let result = 1;
    a %= p;

    while (b > 0) {
      if ((b & 1) !== 0) {
        result = (result * a) % p;
      }

      b >>= 1;
      a = (a * a) % p;
    }

    return result;
  }
}
