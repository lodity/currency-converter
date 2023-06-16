import { Pipe, PipeTransform } from '@angular/core';
import ICurrency from '../models/ICurrency';

@Pipe({
  name: 'filterCurrencies',
})
export class FilterCurrenciesPipe implements PipeTransform {
  transform(currencies: ICurrency[], search: string): ICurrency {
    return currencies.filter((curr) =>
      curr.cc.toLowerCase().includes(search.toLowerCase())
    )[0];
  }
}
