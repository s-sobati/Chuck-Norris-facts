import {ActionReducerMap} from '@ngrx/store';
import * as categoriesReducer from './categories/reducer';
import * as factsReducer from './facts/reducer';
import * as listsReducer from './lists/reducer';


export interface State {
  categories: categoriesReducer.State;
  facts: factsReducer.State;
  lists: listsReducer.State;
}



export const rootReducer: ActionReducerMap<State> = {
  categories: categoriesReducer.reducer,
  facts: factsReducer.reducer,
  lists: listsReducer.reducer,
};
