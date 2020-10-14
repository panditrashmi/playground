import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { MyButtonComponent } from './my-button/my-button.component';



@NgModule({
  declarations: [ComponentsComponent, MyButtonComponent],
  imports: [
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
