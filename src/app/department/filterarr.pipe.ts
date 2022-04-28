import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterarr'
})
export class FilterarrPipe implements PipeTransform {

  transform(code:string): string {
     return code +' iti';
    
  }

}
