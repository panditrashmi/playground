import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACDaterangepickerComponent } from './ac-daterangepicker/ac-daterangepicker.component';
import { ACDaterangepickerConfig } from './ac-daterangepicker/ac-daterangepicker.service';

@NgModule({
  declarations: [
    AppComponent,
    ACDaterangepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [ACDaterangepickerConfig],
  bootstrap: [AppComponent],

})
export class AppModule { }
