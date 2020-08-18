import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {JokesService} from '../../api/services/jokes.service';
import {delay, map, withLatestFrom} from 'rxjs/operators';
import * as sourceListActions from './actions';
import * as fromRoot from '../index';


@Injectable()
export class ListsEffects {

  constructor(private actions$: Actions,
              private jokesService: JokesService,
              private store: Store<fromRoot.State>) {}

  @Effect({dispatch: false})
  public userLoginDataSuccess$: Observable<void> = this.actions$.pipe(
    ofType(sourceListActions.MAKE_SOURCE_LIST_ACTION),
    delay(1000),
    withLatestFrom(this.store.select((state: fromRoot.State) => state.facts.data)),
    map( (source: any) => {
      const [action, factsData] = source;
      const result = factsData.filter(item => {
        return item.categories.includes(action.payload);
      });
      this.store.dispatch(new sourceListActions.SourceListResultAction(result));
    })
  );
}
