import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  registerUser(body:any):Observable<any>
  {
    return this.http.post('http://localhost:8080/api/user',body)
  }
  validateUser(body:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/user/login',body)
  }
}
