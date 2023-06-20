import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { AppComponent } from '../../app.component';
import { FilterCurrenciesPipe } from '../../pipes/filter-currencies.pipe';

@Component({
  selector: 'app-convertation',
  templateUrl: './convertation.component.html',
  styleUrls: ['./convertation.component.css'],
})
export class ConvertationComponent {
  public fromAmount: number = 0;
  public toAmount: number = 0;
  public fromCurrency: string = 'USD';
  public toCurrency: string = 'UAH';

  constructor(
    private currencyService: CurrencyService,
    public appComponent: AppComponent
  ) {}

  convert(changeInFirst: boolean) {
    if (changeInFirst) {
      this.toAmount =
        ((this.fromCurrency === 'UAH'
          ? 1
          : new FilterCurrenciesPipe().transform(
              this.currencyService.currencies,
              this.fromCurrency
            ).rate) *
          this.fromAmount) /
        (this.toCurrency === 'UAH'
          ? 1
          : new FilterCurrenciesPipe().transform(
              this.currencyService.currencies,
              this.toCurrency
            ).rate);
    } else {
      this.fromAmount =
        ((this.toCurrency === 'UAH'
          ? 1
          : new FilterCurrenciesPipe().transform(
              this.currencyService.currencies,
              this.toCurrency
            ).rate) *
          this.toAmount) /
        (this.fromCurrency === 'UAH'
          ? 1
          : new FilterCurrenciesPipe().transform(
              this.currencyService.currencies,
              this.fromCurrency
            ).rate);
    }
    console.log(this.fromAmount);
    console.log(this.toAmount);
  }
}
