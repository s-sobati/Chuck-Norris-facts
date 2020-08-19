import {Action} from '@ngrx/store';
import {Facts} from './reducer';


export const FACTS_GET_REQUEST = '[Facts] get facts request';
export const FACTS_GET_SUCCESS = '[Facts] get facts success';
export const FACTS_GET_ERROR = '[Facts] get facts failed';

export class GetFactsAction implements Action {
  readonly type = FACTS_GET_REQUEST;

}

export class GetFactsSuccessAction implements Action {
  readonly type = FACTS_GET_SUCCESS;

  constructor(public payload: Facts) {
  }
}

export class GetFactsErrorAction implements Action {
  readonly type = FACTS_GET_ERROR;

  constructor(public payload: any) {
  }
}

export type Actions
  = GetFactsAction
  | GetFactsSuccessAction
  | GetFactsErrorAction;
