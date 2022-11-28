import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Increment Page] Increment',
  props<{ amount: number }>()
);


export const setUsers = createAction(
  '[Users] Set Users',
  props<{ users: any[] }>()
);


export const apiGetUserData = createAction('[Users API] Get User Data');

export const loadUsersSuccess = createAction('[Users API] Users Loaded Success', props<{ users: any[] }>());

export const loadUsersError = createAction(
  '[Users API] Users Loaded Error',
  props<{ error: any[] }>()
);


