import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  template:`
    <div class="card">
      <div class="card-header">
        Quản lý danh mục sản phẩm
      </div>
      <div class="card-body">
       <div class="form-group">
         <label>Mã SP</label>
         <input type="text"  class="form-control" [(ngModel)] = "form.maSP"/> 
       </div>
       <div class="form-group">
         <label>Tên SP</label>
         <input type="text"  class="form-control" [(ngModel)] = "form.tenSP" />
       </div>
       <div class="form-group">
         <label>Giá SP</label>
         <input type="text"  class="form-control" [(ngModel)] = "form.giaSP" />
       </div>
      </div>
      <div class="card-footer text-muted">
        <button class="btn btn-success" (click)="addProduct()">Thêm sản phẩm</button>
      </div>
    </div>
    <!--Table producr-->
    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã SP</th>
          <th>Giá SP</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products; let idx = index" [class]="{
          'bg-secondary': (idx + 1 )% 2 === 0
        }">
          <td>{{idx + 1}}</td>
          <td>{{product.maSP}}</td>
          <td>{{product.tenSP}}</td>
          <td>{{product.giaSP}}</td>
        </tr>
        <!-- ktra nếu total bằng 0 sẽ k hiển thị-->
        <tr *ngIf="total">
          <td rowspan="4">
            {{total}}
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./baitap6.component.scss']
})
export class Baitap6Component implements OnInit {

  form: any = {
    maSP: "",
    tenSP: "",
    giaSP: "",
  };

  products: any[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.form);
    this.products.push({...this.form});

    this.total = this.products.reduce((total, product) => {
      total += +product.giaSP;
      return total;
    },0)
  }

}
