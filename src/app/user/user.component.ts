import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsersSuccess } from '../+store/actions';
import { IAppState } from '../+store/reducer';
import { getGlobalUsers } from '../+store/selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$ = this.store.select(getGlobalUsers);

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    //this.store.dispatch(loadUsersSuccess({users: []}));
    this.store.dispatch(loadUsersSuccess({ users: [] }));
  }

}
