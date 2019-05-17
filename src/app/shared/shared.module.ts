import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AHeaderComponent } from './components/a-header/a-header.component';
import { MatModule } from '~app/mat/mat.module';
import { HeaderDetailComponent } from './components/header-detail/header-detail.component';

@NgModule({
  declarations: [AHeaderComponent, HeaderDetailComponent],
  imports: [CommonModule, MatModule],
  exports: [AHeaderComponent, HeaderDetailComponent],
})
export class SharedModule { }
