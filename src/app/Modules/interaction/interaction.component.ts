import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  template: `
    <h1>Cybersoft Movies</h1>
    <app-add-movie (onAdd)="handleAddMovie($event)"></app-add-movie>
    <app-movie-list [movies]="movies" (onDelete) = deleteMovie($event)></app-movie-list>
  `,
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  movies: any[] = [
    {id: 1, name: "Doremon",description: "ABC",img: "assets/img/1.jpg"},
    {id: 2, name: "Doremon 2",description: "ABC",img: "assets/img/3.jpg"},
    {id: 3, name: "Doremon 3",description: "ABC",img: "assets/img/3.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  handleAddMovie(movie: any){
    this.movies.push(movie);
  }
  deleteMovie(movieId: number){
    this.movies = this.movies.filter ((item) => item.id !== movieId);
  }

}
