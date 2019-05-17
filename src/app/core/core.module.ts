import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsStoreModule } from "~src/store/store.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1500,
    }),
    BrowserAnimationsModule,
    NgxsStoreModule,
  ],
})
export class CoreModule { }
