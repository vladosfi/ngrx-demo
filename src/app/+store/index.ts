import { increment, setUsers, apiGetUserData, loadUsersSuccess, loadUsersError } from './actions';
import { UserEffects } from './effects';
import { reducer } from './reducer';
import { getGlobal, getGlobalCounter, getGlobalUsers, getGlobalUsersFromEffect, getGlobalUserError } from './selectors';

export const fromRoot = {
  getGlobal, getGlobalCounter, getGlobalUsers, getGlobalUsersFromEffect, getGlobalUserError, reducer, UserEffects, increment, setUsers, apiGetUserData, loadUsersSuccess, loadUsersError
};

