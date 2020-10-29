import { NgModule } from '@angular/core';
import { ACDaterangepickerComponent } from './ac-daterangepicker.component';
import { ACDaterangepickerConfig } from './ac-daterangepicker.service';

@NgModule({
  declarations: [ACDaterangepickerComponent],
  imports: [
  ],
  providers: [ACDaterangepickerConfig],

  exports: [ACDaterangepickerComponent,ACDaterangepickerConfig]
})
export class ACDaterangepicker { }
