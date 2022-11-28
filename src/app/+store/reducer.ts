import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';
import { increment, setUsers } from './actions'

export interface IAppState {
  global: State;
}


export interface State {
  counter: number,
  users: any[] | null
}

const initialState: State = {
  counter: 0,
  users: null
}

export const reducer = createReducer<State>(
  initialState,
  on(increment, (state, { amount }) => {
    return { ...state, counter: state.counter + amount };
  }),
  on(setUsers, (state, { users }) => {
    return { ...state, users };
  })
)

export const reducers: ActionReducerMap<IAppState> = { global: reducer };
