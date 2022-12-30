import { Pipe, PipeTransform } from '@angular/core';

import { IMAGES_MAP } from "../../consts/products.consts";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  public transform(brand: string, name: string): string[] {
    return IMAGES_MAP.get(`${brand} ${name}`);
  }
}
