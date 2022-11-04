import { ActionEx, CustomerActionTypes } from "../actions/customer.actions";

export const initialState = [];

export function UserReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case CustomerActionTypes.Add:
      const addResult = [...state, action.payload];
      return addResult;
    case CustomerActionTypes.Remove:
      const removeResult = [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
      return removeResult;
    default:
      return state;
  }
}
