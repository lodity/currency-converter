import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(
    public currencyService: CurrencyService,
    public appComponent: AppComponent
  ) {}
}
