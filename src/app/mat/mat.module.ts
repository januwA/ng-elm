import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatGridListModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
  ],
})
export class MatModule { }
