import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  template:`
    <div class="card">
      <div class="card-header">
        Add Movie
      </div>
      <div class="card-body">
        <div class="form-group">
          <label>Ten Phim</label>
          <input type="text" class="form-control" [(ngModel)] = "form.name" />
        </div>
        <div class="form-group">
          <label>Mô tả</label>
          <input type="text" class="form-control" [(ngModel)] = "form.description" />
        </div>
        <div class="form-group">
          <label>Hinh Anh</label>
          <input type="text" class="form-control" [(ngModel)] = "form.img" />
        </div>
      </div>
      <div class="card-footer text-muted mb-5">
        <button class="btn btn-success" (click)=handleAddMovie()>Add Movie</button>
      </div>
    </div>
  `,
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  form: any = {
    name: "",
    description: "",
    img: "",
  };

  constructor() { }

  ngOnInit(): void {
  }
  handleAddMovie(){
    const id = Math.floor(Math.random () * 100);
    this.onAdd.emit({...this.form,id})
  }

}
