import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { DropdownComponent } from "./dropdown/dropdown.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [HeaderComponent, DropdownComponent, LoaderComponent],
  imports: [CommonModule, NgbModule],
  exports: [HeaderComponent, DropdownComponent, LoaderComponent],
})
export class SharedModule {}
