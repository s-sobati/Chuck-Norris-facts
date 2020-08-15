import { Action } from '../Action.model';
import { Actions } from './actions/types';

export interface TestState {
  data: string | null;
}

export const TestInitialState: TestState = {
  data: null,
};

export default (state: TestState = TestInitialState, action: Action): TestState => {
  switch (action.type) {
    case Actions.TEST_ACTION:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
