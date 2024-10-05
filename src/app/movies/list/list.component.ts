import { Component,OnInit } from '@angular/core';
import { IData } from 'src/app/models/data';
import { IMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'ma-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listMovie: IMovie[] = [];

  constructor(private _movieService: MovieService) {}

ngOnInit(): void {
    this._movieService.getMovies().subscribe(
      (response) => {
        this.listMovie = response.data;
      }
    ) 
  }
}
