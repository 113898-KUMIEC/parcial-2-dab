import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IData } from '../models/data';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesApi = 'https://nodejs-sls-movies-api.vercel.app/api/movies';
  
  constructor(private http: HttpClient) {}

  getOneByName(name: string): Observable<IMovie> {
    console.log(this.http.get<IMovie>(`${this.moviesApi}/${name}`))
    return this.http.get<IMovie>(`${this.moviesApi}?title=${encodeURIComponent(name)}`);
  }

  add(product: IMovie) : Observable<IMovie> {
    return this.http.post<IMovie>(`${this.moviesApi}/`, product);
  }

  getMovies(): Observable<IData> {
    return this.http.get<IData>(`${this.moviesApi}`);
  }
}
