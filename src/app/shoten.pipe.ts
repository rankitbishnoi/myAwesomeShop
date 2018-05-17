import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShotenPipe implements PipeTransform{
  transform(value: string) {
    if (value.length > 23) {
      return value.substr(0,23) + '...';
    }
    return value;
  }
}
