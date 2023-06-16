import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';
import ICurrency from './models/ICurrency';
import { FilterCurrenciesPipe } from './pipes/filter-currencies.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'currency-converter';
  loading = false;
  currencyUSD: ICurrency = {
    cc: '',
    r030: 0,
    txt: '',
    rate: 0,
    exchangedate: '',
  };
  currencyEUR: ICurrency = {
    cc: '',
    r030: 0,
    txt: '',
    rate: 0,
    exchangedate: '',
  };
  currencyUAH: ICurrency = {
    cc: 'UAH',
    r030: 0,
    txt: '',
    rate: 1,
    exchangedate: '',
  };

  constructor(public currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.currencyService.getAll().subscribe(() => {
      this.loading = false;
      console.log(this.currencyService.currencies);
      this.currencyUSD = new FilterCurrenciesPipe().transform(
        this.currencyService.currencies,
        'usd'
      );
      this.currencyEUR = new FilterCurrenciesPipe().transform(
        this.currencyService.currencies,
        'eur'
      );
    });
  }
}
