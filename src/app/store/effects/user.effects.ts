import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UserService } from '../../api/user.service';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

      loadUsers$ = createEffect(() =>
        this.actions$.pipe(
          // you can pass in multiple actions here that will trigger the same effect
          ofType(loadUser.type, MenusActions.addMenuItemSuccess),
          switchMap(() =>
            this.userService.getData().pipe(
              map((menuItems) =>
                MenusActions.fetchMenuSuccess({ menuItems: menuItems })
              ),
              catchError((error) =>
                of(MenusActions.fetchMenuFailed({ error: error }))
              )
            )
          )
        )
      );

  constructor(
    private actions$: Actions<any>, // this is an RxJS stream of all actions
    private userService: UserService // we will need this service for API calls
  ) { }
}
