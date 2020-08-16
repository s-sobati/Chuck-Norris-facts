import {ActionReducerMap} from '@ngrx/store';
import * as categoriesReducer from './categories/reducer';
import * as factsReducer from './facts/reducer';


export interface State {
  categories: categoriesReducer.State;
  facts: factsReducer.State;
}



export const rootReducer: ActionReducerMap<State> = {
  categories: categoriesReducer.reducer,
  facts: factsReducer.reducer,
};
