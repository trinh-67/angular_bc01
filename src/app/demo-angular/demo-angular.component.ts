import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-angular',
  template:`
    <div>Đây là component demo</div>
  `,
  styleUrls: ['./demo-angular.component.scss']
})
export class DemoAngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
