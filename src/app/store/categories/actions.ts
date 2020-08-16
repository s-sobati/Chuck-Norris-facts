import { Action } from '@ngrx/store';


export const CATEGORIES_GET_REQUEST = '[Categories] get categories request';
export const CATEGORIES_GET_SUCCESS = '[Categories] get categories success';
export const CATEGORIES_GET_ERROR = '[Categories] get categories failed';

export class GetCategoriesAction implements Action {
  readonly type = CATEGORIES_GET_REQUEST;

}

export class GetCategoriesSuccessAction implements Action {
  readonly type = CATEGORIES_GET_SUCCESS;

  constructor(public payload: string[]) {
  }
}

export class GetCategoriesErrorAction implements Action {
  readonly type = CATEGORIES_GET_ERROR;

  constructor(public payload: any) {
  }
}

export type Actions
  = GetCategoriesAction
  | GetCategoriesSuccessAction
  | GetCategoriesErrorAction;
