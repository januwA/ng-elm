import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { CloseHeaerDetial } from "~src/store/dashboard/states/global/global.actions";

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.styl']
})
export class HeaderDetailComponent implements OnInit {

  @Input()
  public seller: any = {};


  constructor(private store: Store) { }

  ngOnInit() {
  }

  public close = () => this.store.dispatch(new CloseHeaerDetial());
}
