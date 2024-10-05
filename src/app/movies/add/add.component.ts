import { Component,OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { catchError, map, switchMap } from 'rxjs/operators';

export function movieExistValidator(movieService:MovieService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const movieName = control.value;
    if (!movieName) {
      return of(null);
    }
    return movieService.getOneByName(movieName).pipe(
        switchMap((movie) => {
            if (Object.keys(movie).length === 0 && movie.constructor === Object) {
              return of(null);
            } else {
              return of({ movieExists: true });
            }
          }),
    );
  };
}


@Component({
  selector: 'ma-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  movieForm: FormGroup= new FormGroup({});
  
  constructor(private fb: FormBuilder, private _movieSerice: MovieService,) {}
  
  movie:IMovie=new IMovie();
  
  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ["", [Validators.required,Validators.minLength(5), Validators.required,movieExistValidator(this._movieSerice)]],
      year: ["", [Validators.min(1900), Validators.max(2023)]],
      extract: ["", [Validators.minLength(15), Validators.required]],
      cast: this.fb.array([this.buildCastControls("", "")]),
      href: ["",[Validators.minLength(5),Validators.pattern(/^[A-Z_]+$/), Validators.required]]
    })
  }

  submitForm() {
    const movieData = this.movieForm.value;
    console.log(movieData)
    if (this.movieForm.valid) {
      console.log(movieData)
      const createMovieDto: IMovie = {
        id: 0,
        href: movieData.href,
        title: movieData.title,
        year: movieData.year,
        cast: movieData.cast,
        genres: movieData.genres,
        extract: movieData.extract,
        thumbnail: movieData.thumbnail,
        thumbnailWidth: movieData.thumbnailWidth,
        thumbnailHeight: movieData.thumbnailHeight,
      };
      console.log(createMovieDto)
      this._movieSerice.add(createMovieDto).subscribe((nuevoMovie) => {
        alert('Película agregada: ' + nuevoMovie.title);
        this.limpiar();
      });
    }
    else{
      alert('nop')
    }
  }

  addCast(firstName: string, lastName: string){
    this.cast.push(this.buildCastControls(firstName, lastName));
  }

  deleteCast(){
    this.cast.removeAt(this.cast.length -1)
  }
  get cast(): FormArray {
    return this.movieForm.get('cast') as FormArray;
  }
  buildCastControls(firstName: string, lastName: string) {
    return this.fb.group({
      firstName: [firstName, [Validators.required, Validators.min(5)]],
      lastName: [lastName, [Validators.required, Validators.max(20)],
      ],
    });
  }
  limpiar() {
    // Puedes implementar lógica para limpiar el formulario si es necesario
    this.movieForm.reset();
  }
}
