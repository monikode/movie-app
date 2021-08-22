import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watchlist'
})
export class WatchlistPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
