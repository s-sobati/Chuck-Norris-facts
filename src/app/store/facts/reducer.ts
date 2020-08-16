import * as types from './actions';

export interface Fact {
  category: string[] | null;
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface State {
  is_fetching: boolean;
  data: Fact[] | null;
  error: any;
}

const initialState: State = {
  is_fetching: false,
  data: null,
  error: null
};

export function reducer(state = initialState, action: types.Actions): State {
  switch (action.type) {

    case types.FACTS_GET_REQUEST: {
      return  {
        ...state,
        is_fetching: true
      };
    }

    case types.FACTS_GET_SUCCESS: {
      return  {
        ...state,
        is_fetching: false,
        data: action.payload
      };
    }

    case types.FACTS_GET_ERROR: {
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
