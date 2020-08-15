import { ActionReducerMap } from '@ngrx/store';
import * as testReducer from './test/reducer';


export interface State {
  test: testReducer.State;
}



export const rootReducer: ActionReducerMap<State> = {
  test: testReducer.reducer,
};
