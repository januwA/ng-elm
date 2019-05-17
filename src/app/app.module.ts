import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { MatModule } from "./mat/mat.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent], // 导入组件
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatModule,
    BrowserAnimationsModule,
    SharedModule,
  ], // 导入模块
  providers: [],
  bootstrap: [AppComponent], // 根组件
  exports: [] // 导出模块，供其它模块使用
})
export class AppModule {}
