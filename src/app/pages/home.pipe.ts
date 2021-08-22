import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'home'
})
export class HomePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
