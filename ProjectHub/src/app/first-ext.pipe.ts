import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstExt'
})
export class FirstExtPipe implements PipeTransform {

  transform(value: string, splitby:string, idx:number): unknown {
    return value.split(splitby)[idx];
  }

}
