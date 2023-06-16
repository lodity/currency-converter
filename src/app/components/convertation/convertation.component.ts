import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { AppComponent } from '../../app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterCurrenciesPipe } from '../../pipes/filter-currencies.pipe';

@Component({
  selector: 'app-convertation',
  templateUrl: './convertation.component.html',
  styleUrls: ['./convertation.component.css'],
})
export class ConvertationComponent {
  form = new FormGroup({
    firstCurrencyValue: new FormControl<number>(0),
    secondCurrencyValue: new FormControl<number>(0),
    firstCurrencyName: new FormControl<string>('USD'),
    secondCurrencyName: new FormControl<string>('UAH'),
  });

  constructor(
    private currencyService: CurrencyService,
    public appComponent: AppComponent
  ) {}

  convert(changeInFirst: boolean) {
    if (changeInFirst) {
      this.form.value.secondCurrencyValue =
        ((this.form.value.firstCurrencyName === 'UAH'
          ? 1
          : new FilterCurrenciesPipe().transform(
              this.currencyService.currencies,
              this.form.value.firstCurrencyName || ''
            ).rate) *
          (this.form.value.firstCurrencyValue || 0)) /
        (this.form.value.secondCurrencyName === 'UAH'
          ? 1
          : new FilterCurrenciesPipe().transform(
              this.currencyService.currencies,
              this.form.value.secondCurrencyName || ''
            ).rate);
    } else {
      this.form.value.firstCurrencyValue =
        ((this.form.value.secondCurrencyName === 'UAH'
          ? 1
          : new FilterCurrenciesPipe().transform(
              this.currencyService.currencies,
              this.form.value.secondCurrencyName || ''
            ).rate) *
          (this.form.value.secondCurrencyValue || 0)) /
        (this.form.value.firstCurrencyName === 'UAH'
          ? 1
          : new FilterCurrenciesPipe().transform(
              this.currencyService.currencies,
              this.form.value.firstCurrencyName || ''
            ).rate);
    }
    console.log(
      this.form.value.firstCurrencyValue,
      this.form.value.secondCurrencyValue
    );
  }
}
