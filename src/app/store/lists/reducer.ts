import * as types from './actions';
import {Fact} from '../facts/reducer';


export interface State {
  is_fetching: boolean;
  selectedCategory: string;
  source_list: Fact[] | null;
  favorites: string[];
}

const initialState: State = {
  is_fetching: false,
  selectedCategory: 'Not selected',
  source_list: null,
  favorites: []
};

export function reducer(state = initialState, action: types.Actions): State {
  switch (action.type) {

    case types.MAKE_SOURCE_LIST_ACTION: {
      return  {
        ...state,
        is_fetching: true,
        selectedCategory: action.payload
      };
    }

    case types.SOURCE_LIST_RESULT_ACTION: {
      return  {
        ...state,
        is_fetching: false,
        source_list: action.payload
      };
    }

    case types.ADD_TO_FAVORITES_ACTION: {
      return  {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    }

    case types.DELETE_FROM_FAVORITES_ACTION: {
      return  {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };
    }

    default: {
      return state;
    }
  }
}
