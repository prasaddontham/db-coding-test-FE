import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";

import { CountriesRoutingModule } from "./countries-routing.module";
import { HomeComponent } from "./home/home.component";
import { RegionsComponent } from "./regions/regions.component";
import { SharedModule } from "../shared/shared.module";
import { CardsComponent } from "./cards/cards.component";
import { CountryComponent } from "./country/country.component";

@NgModule({
  declarations: [
    HomeComponent,
    RegionsComponent,
    CardsComponent,
    CountryComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
})
export class CountriesModule {}
