import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies: Observable<Movie[]>
 public _movieURL ="http://localhost:3000/movies";

  
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
  return  this.http.get<Movie[]>(this._movieURL);
  }
}
