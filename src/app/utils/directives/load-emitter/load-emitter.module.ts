import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadEmitterDirective } from './load-emitter.directive';

@NgModule({
  declarations: [LoadEmitterDirective],
  imports: [CommonModule],
  exports: [LoadEmitterDirective]
})
export class LoadEmitterModule { }
