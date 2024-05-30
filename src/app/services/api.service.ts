import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:any="http://universities.hipolabs.com/search?country="
  constructor(
    private http:HttpClient
  ) { }

  getUniversities():Observable<any>{
    return this.http.get(`${this.url}Turkey`)
  }

  getCountryUni(ulke:any):Observable<any>{
    return this.http.get(`${this.url}${ulke}`)
  }

}
