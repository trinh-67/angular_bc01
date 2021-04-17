import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
    <h3>NgIf: Dùng để ẩn hiện 1 tag/component</h3>
    <!-- Thẻ p chỉ được hiên thị ra khi điều kiện bên trong *ngIf là true -->
    <p *ngIf="isActive">Cybersoft</p>
    <button (click)="isActive = !isActive">Toggle</button>

    <!-- UI khi đã đăng nhập -->
    <div *ngIf="isLoggedIn; else loginTemplate">
      <p>Welcome IT</p>
      <button (click) = "isLoggedIn = false">Logout</button>
    </div>
    <!-- Ui khi chưa đăng nhập -->
    <!-- <div *ngIf="!isLoggedIn">
      <p>Please Login</p>
      <button (click) = "isLoggedIn = true">Login</button>
    </div> -->

    <!-- ng-template: mặc định nội dung bên trong thẻ này sẽ không được hiển thị ra UI -->
    <!-- Nội dung này chỉ được hiển thị ra khi ta gọi tới template variable của nó -->
    <ng-template #loginTemplate>
     <div>
       <p>Please Login</p>
      <button (click) = "isLoggedIn = true">Login</button>
     </div>
    </ng-template>

    <h3>NgSwitch: Ẩn hiện tag/component với 1 danh sách các điều kiện</h3>
    <div [ngSwitch]="color">
      <p *ngSwitchCase="'primary'" class="bg-primary">Primary</p> 
      <p *ngSwitchCase="'secondary'" class="bg-secondary">Secondary</p> 
      <p *ngSwitchCase="'success'" class="bg-success">Success</p> 
      <p *ngSwitchCase="'warning'" class="bg-warning">Warning</p> 
      <p *ngSwitchCase="'danger'" class="bg-danger">Danger</p> 
      <p *ngSwitchDefault>Default</p> 
      
    </div>

    <select [value]="color" (change)="changeColor($event)">
      <option value="">Default</option>
      <option value="primary">primary</option>
      <option value="secondary">secondary</option>
      <option value="success">success</option>
      <option value="warning">warning</option>
      <option value="danger">danger</option>
    </select>

    <h3>NgFor: Duyệt mảng</h3>
    <p *ngFor="let student of students; let idx = index; let total = count">
        {{idx + 1}} /{{total}} - Name: {{student.name}} - Age:{{student.age}}
    </p>
    <!-- count as total -->

    <!-- Kiểm tra students khác null hoặc undefined mới duyeeth mảng -->
    <!-- Không cho phép 2 structural directives trên cùng 1 the -->
    <!-- ng-container hoạt động tương tự Fragment bên react, chỉ render nội dung -->
    <ng-container *ngIf="students">
      <p *ngFor="let student of students">
        Name: {{ student.name}} - Age: {{student.age}}
      </p>
    </ng-container>

    <!-- Kết hợp ng-template và ng-container để tái sử dụng 1 đoạn UI -->
    <!-- Bọc đoạn code cần tái sử dụng bên trong ng-template -->

   <ng-template #templateAlert>
    <div class="alert alert-danger">
        <span>Something went wrong</span>
      </div>
   </ng-template>

   <!-- Chỗ nào cần sử dụng ta sẽ gọi ng-container với directive ngTemplateOutlet -->
   <ng-container *ngTemplateOutlet="templateAlert"></ng-container>
   <ng-container *ngTemplateOutlet="templateAlert"></ng-container>
   <ng-container *ngTemplateOutlet="templateAlert"></ng-container>
    
  `,
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = false;

  isLoggedIn: boolean = false;
  color: string = "primary";

  students: any[] = [
    {name: "Teò",age: 25},
    {name: "Tí",age: 24},
    {name: "Tũn",age: 27},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(evt: any){
    this.color = evt.target.value;
  }

}
