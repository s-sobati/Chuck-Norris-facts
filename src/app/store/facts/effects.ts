import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {JokesService} from '../../api/services/jokes.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as factsActions from './actions';


@Injectable()
export class FactsEffects {

  constructor(private actions$: Actions,
              private jokesService: JokesService) {}

  @Effect()
  categoriesRequest$: Observable<Action> = this.actions$.pipe(
    ofType(factsActions.FACTS_GET_REQUEST),
    switchMap(data => {
      return this.jokesService.getFactsData().pipe(
        map((success) => new factsActions.GetFactsSuccessAction(success)),
        catchError((error) => of(new factsActions.GetFactsErrorAction(error)))
      );
    })
  );
}
