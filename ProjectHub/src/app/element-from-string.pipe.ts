import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elementFromString'
})
export class ElementFromStringPipe implements PipeTransform {

  transform(value: string, splitby:string, idx:number): unknown {
    var v= value.split(splitby);
    return v[idx];
  }

}
