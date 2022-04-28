import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: any[], term:string): any {
    if(term == undefined)
    {
      return product;
    }
    
    return product.filter(function(product){
      return product.name.toLowerCase().includes(term.toLowerCase())
    })

  }

}
