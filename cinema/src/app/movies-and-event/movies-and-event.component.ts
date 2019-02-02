import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Movie } from '../shared/movie';

@Component({
  selector: 'app-movies-and-event',
  templateUrl: './movies-and-event.component.html',
  styleUrls: ['./movies-and-event.component.css']
})
export class MoviesAndEventComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MoviesService) { 
    this.movies = [];
  }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(
      data => {
        this.movies =data;
      }
    )
    
  }


}
