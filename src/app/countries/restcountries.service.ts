import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Cardcountries } from "./interface/cardcountries.type";

interface continents {
  region: string;
}

@Injectable({
  providedIn: "root",
})
export class RestcountriesService {
  constructor(private http: HttpClient) {}

  rootUrl = "https://restcountries.com/v2";

  search(term: string) {
    const filterTerm = `${this.rootUrl}/name/${term}?fullText=true`;
    return this.http.get<Cardcountries>(filterTerm);
  }

  dropdownFilter(region: string) {
    const filterTerm = `${this.rootUrl}/region/${region}`;
    return this.http.get<Cardcountries>(filterTerm);
  }

  getCountryInfo(info: string) {
    const searchCountryInfo = `${this.rootUrl}/name/${info}`;
    return this.http.get(searchCountryInfo);
  }
}
