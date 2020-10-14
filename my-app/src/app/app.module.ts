import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsCounterComponent } from './analytics-counter/analytics-counter.component';
import { createCustomElement } from '@angular/elements';
import { ComponentsModule } from 'components';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AnalyticsCounterComponent
  ]

})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(AnalyticsCounterComponent, { injector: this.injector });
    customElements.define('analytics-counter', el);
  }

}
