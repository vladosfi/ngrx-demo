import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiGetUserData, loadUsersSuccess } from '../+store/actions';
import { IAppState } from '../+store/reducer';
import {  getGlobalUserError, getGlobalUsersFromEffect } from '../+store/selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$ = this.store.select(getGlobalUsersFromEffect);
  error$ = this.store.select(getGlobalUserError);

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    //this.store.dispatch(loadUsersSuccess({users: []}));
    this.store.dispatch(apiGetUserData());
  }

}
