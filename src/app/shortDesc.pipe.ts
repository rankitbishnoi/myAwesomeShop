import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shortDesc'
})
export class ShortDescPipe implements PipeTransform{
  transform(value: string, exec: boolean) {
    if (exec === true) {
      let index = value.indexOf('. ');
      if (index === -1) {return value; }
      index = value.indexOf('. ', index + 1);
      if (index === -1) {return value; }
      return value.substr(0, index + 1);
    } else {
      return value;
    }
  }
}
