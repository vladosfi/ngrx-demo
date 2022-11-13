import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'https://jsonplaceholder.typicode.com/'
  endPoint = this.baseUrl + 'users';

  constructor(
    private http: HttpClient,
  ) {
  }

  getData<User>(): Observable<User> {
    var params = new HttpParams();
    return this.http.get<User>(this.endPoint, { params });
  }

}
