import { Component, OnInit } from "@angular/core";

import { RestcountriesService } from "../restcountries.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  list = [];
  loading: boolean = false;

  constructor(private service: RestcountriesService) {}

  ngOnInit(): void {
  }

  onDropdown(event: string) {
    this.loading = true;
    this.service.search(event).subscribe((response: any) => {
      this.list = response;
      this.loading = false;
    });
  }
}
