import * as test from './actions';



export interface State {
  text: string;
}

const initialState: State = {
  text: ''
};

export function reducer(state = initialState, action: test.Actions): State {
  switch (action.type) {

    case test.TEST_TYPE: {
      console.log('action.payload = ', action.payload);
      return  {
        ...state,
        text: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
