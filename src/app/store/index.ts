import {
  Store,
  combineReducers,
  createStore,
} from 'redux';
import testReducer, {TestInitialState, TestState} from './test';
import { composeWithDevTools } from 'redux-devtools-extension';
import { environment } from '../../environments/environment';

export interface RootState {
  test: TestState;
}

export const initialState: RootState = {
  test: TestInitialState
};

export const rootReducer = combineReducers({
  test: testReducer,
});

export const store: Store<RootState> = !environment.production ? createStore(
  rootReducer,
  composeWithDevTools(),
) : createStore(
  rootReducer,
);

