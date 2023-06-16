import { Injectable } from '@angular/core';
import ICurrency from '../models/ICurrency';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currencies: ICurrency[] = [];

  constructor(private http: HttpClient) {}

  getAll(): Observable<ICurrency[]> {
    return this.http
      .get<ICurrency[]>(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
      )
      .pipe(tap((currencies) => (this.currencies = currencies)));
  }
}
