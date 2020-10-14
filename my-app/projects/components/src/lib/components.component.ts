import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-components',
  template: `
    <p>
      My good components work!
    </p>
  `,
  styles: [
  ]
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
