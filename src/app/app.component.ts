import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { fadeHeaderDetail } from "~shared/animations/fade-header-detail.anime";
import { Select } from '@ngxs/store';
import { GlobalState, GlobalStateModel } from "~src/store/dashboard/states/global/global.state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"],
  animations: [
    fadeHeaderDetail({
      name: 'fade-header-detail'
    }),
  ]
})
export class AppComponent {

  public seller = {};
  @Select(GlobalState.isOpenHeaderDetial)
  public isShowHeaderDetail$: Observable<boolean>;
  n = 1;

  public tabData = {
    selectedIndex: 0,
    tabs: [
      { label: '商家', data: {} },
      { label: '评论', data: {} },
      { label: '商家', data: {} },
    ]
  };

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getseller();
  }

  public getseller(): void {
    this.http
      .get("api/seller")
      .pipe(catchError(this.handleError({})))
      .subscribe(r => {
        this.seller = r;
      });
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  selectedIndexChange(n) {
    console.log(n);
  }
  selectedTabChange(e){
    console.log(e);
    
  }
}
