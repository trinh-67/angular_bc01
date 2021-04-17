import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  template: `
    <div class="container">
      <h1>name: {{name}}- interpolation</h1>
      <h1>title: {{showTitle()}}</h1>

      <p [innerHTML] = "name + '' + showTitle()">

      </p>

      <p>{{name}}{{showTitle()}}</p>
      <input value={{name}}/><br/>
      <input [value]="name" />
      <img [src]="imgSrc" />
      <img src="{{imgSrc}}" />
      <br/>
      <input #tInput />


      <button class="btn btn-success"(click)="changeName(tInput.value)">Set title</button>
    </div>
  `
  ,
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {

  //MVVM: Model view view model
  //react viet theo 
  imgSrc:string = 'https://picsum.photos/200/200';
  name:string = 'cybersoft';
  constructor() { }


  changeName = (value:string) => {
    this.name = value;
  }
  showTitle = () => {
    return 'Cybersoft bootcamp01';
  }

  ngOnInit(): void {
  }

}
