import * as test from './actions';
import {createSelector} from '@ngrx/store';



export interface State {
  is_fetching: boolean;
  data: string[] | null;
  error: any;
}

const initialState: State = {
  is_fetching: false,
  data: null,
  error: null
};

export function reducer(state = initialState, action: test.Actions): State {
  switch (action.type) {

    case test.CATEGORIES_GET_REQUEST: {
      return  {
        ...state,
        is_fetching: true
      };
    }

    case test.CATEGORIES_GET_SUCCESS: {
      return  {
        ...state,
        is_fetching: false,
        data: action.payload
      };
    }

    case test.CATEGORIES_GET_ERROR: {
      return  {
        ...state,
        is_fetching: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
