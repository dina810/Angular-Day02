import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'records'
})
export class RecordsPipe implements PipeTransform {

  transform(location:string): string {
    return location +'iti';
  }

}
