import { Action } from '@ngrx/store';


export const TEST_TYPE = '[Test] test action';

export class TestAction implements Action {
  readonly type = TEST_TYPE;

  constructor(public payload: string) {
  }
}

export type Actions
  = TestAction;
