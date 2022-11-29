import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';
import { increment, loadUsersError, loadUsersSuccess, setUsers } from './actions'

export interface IAppState {
  global: State;
}


export interface State {
  counter: number,
  users: any[] | null
  usersFromEffects: any[] | null,
  error: any | null
}

const initialState: State = {
  counter: 0,
  users: null,
  usersFromEffects: null,
  error: null,
}

export const reducer = createReducer<State>(
  initialState,
  on(increment, (state, { amount }) => {
    return { ...state, counter: state.counter + amount };
  }),
  on(setUsers, (state, { users }) => {
    return { ...state, users };
  }),
  on(loadUsersSuccess, (state, { usersFromEffects }) => {
    return { ...state, usersFromEffects };
  }),
  on(loadUsersError, (state, { error }) => {
    return { ...state, error: error, usersFromEffects: null }
  })
)

export const reducers: ActionReducerMap<IAppState> = { global: reducer };
