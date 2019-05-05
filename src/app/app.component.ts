import { Component } from "@angular/core";
import { environment as env } from "~env/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"],
})
export class AppComponent {
  title = "ng-elm";
  v = env.version;
}
