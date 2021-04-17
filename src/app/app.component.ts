import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Tên thẻ <app-rôt></app-root>
  //Template: thành phần giao diện của thẻ
  template: `
  <div class="container">
    <!--<app-bai-tap-lay-out></app-bai-tap-lay-out>-->
    <!--<app-one-way-binding></app-one-way-binding>-->
    <!--<app-two-way-binding></app-two-way-binding>-->
    <!--<app-structural-directives></app-structural-directives>-->
    <!--<app-attribute-ddirectives></app-attribute-ddirectives>-->
    <!--<app-baitap6></app-baitap6>-->
    <app-interaction></app-interaction>
    
  </div>`,
  styleUrls: ['./app.component.scss'] //Đường dẫn đến file css của thẻ
})


//Xử lý các nút trên giao diện của thẻ <app-root></app-root>
export class AppComponent {
  title = 'bc01angular';
}
