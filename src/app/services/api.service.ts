import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected API_URL = 'https://api.themoviedb.org/3/'
  constructor() { }
  getMovieById(url:String){

  }

}
