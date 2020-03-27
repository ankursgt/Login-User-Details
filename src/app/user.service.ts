import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiurl = "https://reqres.in/api/users/2";

  getAll(): Observable<User>{
    return this.http.get<User>(this.apiurl);
}
}
