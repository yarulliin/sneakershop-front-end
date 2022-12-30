import { LoadEmitterDirective } from './load-emitter.directive';
import { ElementRef } from "@angular/core";

describe('LoadEmitterDirective', () => {
  it('should create an instance', () => {
    const directive = new LoadEmitterDirective(new ElementRef(123));
    expect(directive).toBeTruthy();
  });
});
