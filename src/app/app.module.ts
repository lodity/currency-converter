import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterCurrenciesPipe } from './pipes/filter-currencies.pipe';
import { ConvertationComponent } from './components/convertation/convertation.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, FilterCurrenciesPipe, ConvertationComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
