import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngxs/store";
import { OpenHeaerDetial } from "~src/store/dashboard/states/global/global.actions";

@Component({
  selector: "app-a-header",
  templateUrl: "./a-header.component.html",
  styleUrls: ["./a-header.component.styl"],
})
export class AHeaderComponent implements OnInit {
  @Input()
  public seller: any = {};

  constructor(
    private readonly store: Store
  ) { }
  ngOnInit() { }

  public open = () => this.store.dispatch(new OpenHeaerDetial());
}
