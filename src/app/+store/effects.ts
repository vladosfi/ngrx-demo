import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { apiGetUserData, loadUsersSuccess } from './actions';


@Injectable()
export class UserEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(apiGetUserData),
    tap(() => { console.log('new getUserDataEffect occurred in queue') }),
    mergeMap(() => this.userService.loadUsersEffect()
      .pipe(
        map(data => ({ type: '[Users API] Users Loaded Success', usersFromEffects: data })),
        //map(data => { return new loadUsersSuccess(data) }),
        //map(users => of(new loadUsersSuccess(users))),
        catchError((err) =>
          of({ type: '[Users API] Users Loaded Error', error: err })
        ),
        tap(() => {
          console.log('getUsersDataEffect Finished')
        })
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
}
