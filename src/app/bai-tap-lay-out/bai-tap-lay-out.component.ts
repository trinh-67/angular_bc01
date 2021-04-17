import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-lay-out',
  template:  `
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12">
             <app-header></app-header>
          </div>
        </div>

        <div class="row">
          <div class="col-8">
            <app-content></app-content>
          </div>
          <div class="col-4">
              <app-side-bar></app-side-bar>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <app-footer></app-footer>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./bai-tap-lay-out.component.scss']
})
export class BaiTapLayOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
