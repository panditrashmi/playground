import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ACDaterangepickerConfig {

  public settings: any;

  constructor() {
    this.settings = {};
  }
}
