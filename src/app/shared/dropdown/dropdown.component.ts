import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit {
  constructor() {}

  @Input() options = [];
  @Input() defaultText = "Select Item";

  @Output() sendValueParent: EventEmitter<any> = new EventEmitter();

  public selectedItem = "";

  ngOnInit(): void {}

  changeAction(obj: any) {
    this.selectedItem = obj;
    this.sendValueParent.emit(this.selectedItem);
  }
}
