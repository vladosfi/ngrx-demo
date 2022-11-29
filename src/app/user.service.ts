import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { IAppState } from './+store/reducer';
import { Store } from '@ngrx/store';
import { setUsers } from './+store/actions';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private store: Store<IAppState>) { }

  loadUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => this.store.dispatch(setUsers({ users })));
  }


  loadUsersEffect() {
    //return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }
}
