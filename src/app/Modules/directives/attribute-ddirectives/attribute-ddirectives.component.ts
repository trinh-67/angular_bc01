import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-ddirectives',
  template: `
    <h3>Demo ngClass</h3>
    <!-- Cách viết với nhiều điều kiện -->
    <p class="text-center" [class]="{
      'bg-success': isActive,
      'bg-warning': !isActive
    }">
      Cybersoft
    </p>

    <!-- Cách viết rút gọn khi có 1 điều kiện -->
    <p class="text-center" [class.bg-primary]="isActive">CyberSoft 2</p>
    <button (click) = "isActive = !isActive">Toggle Active</button>

    <h3>Demo ngStyle</h3>
    <p style="text-align: center"
    [style]="{'background-color': color}">BC01</p>

    <div style="height: 200px; width: 200px" [style]="{'background-image': 'url(' + imgSrc + ')'}"></div>

    <!-- <div>
      {{html}}
    </div> -->
    <div [innerHTML]="html"></div>
  `,
  styleUrls: ['./attribute-ddirectives.component.scss']
})
export class AttributeDdirectivesComponent implements OnInit {

  isActive:boolean = false;
  color: string = "red";
  imgSrc:string = "https://picsum.photos/200/200";

  html: string = `
    <div class="alert alert-danger">
      <span>Error</span>
    </div>
  `

  constructor() { }

  ngOnInit(): void {
  }

}
