import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsComponent } from './components.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [ComponentsComponent, MyButtonComponent,WeatherComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [ComponentsComponent,WeatherComponent]
})
export class ComponentsModule { }
