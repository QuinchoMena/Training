import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  URL_JSON = "https://api.myjson.com/bins/uptto";

  getAgents() {
    return this.http.get(this.URL_JSON);
  }
}
