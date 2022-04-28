import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTo'
})
export class PowerToPipe implements PipeTransform {

  transform(value:number , x:number=1):unknown {
    return Math.pow(value,x)
  }

}
