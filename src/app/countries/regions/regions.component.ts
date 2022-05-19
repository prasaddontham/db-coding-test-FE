import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { RestcountriesService } from "../restcountries.service";
import { ArrayType } from "@angular/compiler";
import { REGIONS } from "src/app/reducers/regionstore";

@Component({
  selector: "app-regions",
  templateUrl: "./regions.component.html",
  styleUrls: ["./regions.component.scss"],
})
export class RegionsComponent implements OnInit {
  counter$: Observable<any[]>;

  constructor(private service: RestcountriesService, private store: Store<any>) {}

  items = [];
  dropDownText = "Filter by Country";
  term = "";

  regionOptions = [];
  regionDropDownText = "Select Region";

  @Output() submitted = new EventEmitter<string>();
  @Output() filteredDropdown = new EventEmitter<string>();

  ngOnInit(): void {
    this.store.select('regions').subscribe(x => {
      console.log(x);
      this.regionOptions = x.regions;
    });
  }

  getRegionsFromStore() {
    this.store.dispatch({ type: REGIONS });
  }

  selectedValue(event: string) {
    console.log(event);
    if(event == "Asia" || event == "Europe") {
      this.filterCountriesList(event);
    } else {
      this.filteredDropdown.emit(event);
    }
  }

  filterCountriesList(region: string) {
    this.service.dropdownFilter(region).subscribe((res: any) => {
      
      const countryList = res.map((el) => el.name);

      this.items = countryList;
    });
  }
}
