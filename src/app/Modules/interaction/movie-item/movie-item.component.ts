import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  template:`
    <div class="card">
      <img class="card-img-top" [src]="movie.img" alt="">
      <div class="card-body">
        <h4 class="card-title">{{movie.name}}</h4>
        <p class="card-text">{{movie.description}}</p>
        <button class="btn btn-success" (click)="selectMovie()">Xem chi tiết</button>
        <button class="btn btn-danger" (click)="deleteMovie()">Xóa</button>
      </div>
    </div>
  `,
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: any = {};
  //EventEmiter: đối tượng giúp định nghĩa 1 event 
  //onSelect là tên event (tụ định nghia)
  //Output: Nhận vào event vừa tạo, cung cấp các hàm để đẩy event này lên component cha
  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectMovie(){
    //Cần đẩy bộ phim vừa click lên component cha (MovieListComponent)
    //Emit: kích hoạt event và đẩy lên component cha
    this.onSelect.emit(this.movie);
  }

  deleteMovie(){
    this.onDelete.emit (this.movie.id);
  }

}
