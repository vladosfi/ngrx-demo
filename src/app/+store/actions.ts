import { createAction, props } from '@ngrx/store';



const INCREMENT_PAGE = '[Increment Page] Increment';
const SET_USERS = '[Users] Set Users';
const GET_USERS_DATA = '[Users API] Get User Data';
const USERS_LOAD_SUCCESS = '[Users API] Users Load Success';
const USERS_LOAD_ERROR = '[Users API] Users Load Error';


export const increment = createAction(INCREMENT_PAGE, props<{ amount: number }>());

export const setUsers = createAction(SET_USERS, props<{ users: any[] }>());

export const apiGetUserData = createAction(GET_USERS_DATA);

export const loadUsersSuccess = createAction(USERS_LOAD_SUCCESS, props<{ usersFromEffects: any []}>());

export const loadUsersError = createAction(USERS_LOAD_ERROR, props<{ error: any }>());


