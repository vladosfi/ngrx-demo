import { createSelector, createFeatureSelector } from '@ngrx/store'
import {  State } from './reducer';

export const getGlobal = createFeatureSelector<State>('global');

export const getGlobalCounter = createSelector(getGlobal, g => g.counter);

export const getGlobalUsers = createSelector(getGlobal, g => g.users);

export const getGlobalUsersFromEffect = createSelector(getGlobal, g => g.usersFromEffects);

export const getGlobalUserError = createSelector(getGlobal, g => g.error);
