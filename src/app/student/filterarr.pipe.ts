import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterarr',
  pure:false
})
export class FilterarrPipe implements PipeTransform {

  transform(value:string[]):string[] {
    let res:string[]=[];
    for (let i = 0; i < value.length; i++) {
      if(value[i].startsWith("a"))
        res.push(value[i]);

      }
      return res;
    }

    
  }


