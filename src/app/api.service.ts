import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  key: string;
  posterUrl: string;


  constructor(private httpclient: HttpClient) {
    this.key = "http://www.omdbapi.com/?i=tt3896198&apikey=30063505";
  }


  getFilms(pTitle) {
    return this.httpclient.get(`${this.key}&t=${pTitle}`).toPromise();
  }

}
