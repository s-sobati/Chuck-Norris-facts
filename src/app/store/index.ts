import { ActionReducerMap } from '@ngrx/store';
import * as testReducer from './test/reducer';
import * as categoriesReducer from './categories/reducer';


export interface State {
  test: testReducer.State;
  categories: categoriesReducer.State;
}



export const rootReducer: ActionReducerMap<State> = {
  test: testReducer.reducer,
  categories: categoriesReducer.reducer,
};
