import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../+store/actions';
import { IAppState } from '../+store/reducer';
import { getGlobalCounter, getGlobalUsers } from '../+store/selectors';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home Page';
  counter$ = this.store.select(getGlobalCounter);
  users$ = this.store.select(getGlobalUsers);

  constructor(private store: Store<IAppState>, private userService: UserService) {
  }

  ngOnInit(): void {
    //this.userService.loadUsers();
  }

  incrementCounter() {
    this.store.dispatch(increment({ amount: 10 }));
  }

}
