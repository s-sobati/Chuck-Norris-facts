import {Action} from '@ngrx/store';
import {Fact} from '../facts/reducer';


export const MAKE_SOURCE_LIST_ACTION = '[Lists] source list maker';
export const SOURCE_LIST_RESULT_ACTION = '[Lists] source list result';
export const ADD_TO_FAVORITES_ACTION = '[Lists] add to favorite';
export const DELETE_FROM_FAVORITES_ACTION = '[Lists] delete from favorite';

export class MakeSourceListAction implements Action {
  readonly type = MAKE_SOURCE_LIST_ACTION;

  constructor(public payload: string) {
  }
}

export class SourceListResultAction implements Action {
  readonly type = SOURCE_LIST_RESULT_ACTION;

  constructor(public payload: Fact[]) {
  }
}

export class AddToFavoritesAction implements Action {
  readonly type = ADD_TO_FAVORITES_ACTION;

  constructor(public payload: string) {
  }
}

export class DeleteFromFavoritesAction implements Action {
  readonly type = DELETE_FROM_FAVORITES_ACTION;

  constructor(public payload: string) {
  }
}

export type Actions
  = MakeSourceListAction
  | SourceListResultAction
  | AddToFavoritesAction
  | DeleteFromFavoritesAction;
