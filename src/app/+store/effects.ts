import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { apiGetUserData, loadUsersSuccess } from './actions';


@Injectable()
export class UserEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(apiGetUserData),
    tap(() => { console.log('new getUserDataEffect occurred in queue') }),
    mergeMap(() => this.userService.loadUsersEffect()
      .pipe(
        map(users => ({ type: '[Users API] Users Loaded Success', payload: users })),
        catchError(() => of({ type: '[Users API] Users Loaded Error' })),
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
