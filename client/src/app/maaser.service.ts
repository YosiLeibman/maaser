import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaaserService {

  constructor(public http: HttpClient) { }

  getIncomes() {
    return this.http.get('http://localhost:3003/all-incomes')
  }

  getDonations() {
    return this.http.get('http://localhost:3003/all-donations')
  }

  getMaaser() {
    return this.http.get('http://localhost:3003/maaser')
  }

  add(url, i) {
    return this.http.post(`http://localhost:3003/${url}`, i)
  }


}
