import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getAllApi(){
    return this.http.get("https://api.github.com/users")
  }
  getOneApi(id:any){
    return this.http.get(`https://api.github.com/users/${id}`)
  }
}
