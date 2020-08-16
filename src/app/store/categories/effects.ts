import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {JokesService} from '../../api/services/jokes.service';
import {switchMap, map, catchError, tap} from 'rxjs/operators';
import * as categoriesActions from './actions';
import {Router} from '@angular/router';
import * as fromRoot from '../index';


@Injectable()
export class CategoriesEffects {

  constructor(private actions$: Actions,
              private jokesService: JokesService,
              private store: Store<fromRoot.State>,
              private router: Router) {}

  @Effect()
  categoriesRequest$: Observable<Action> = this.actions$.pipe(
    ofType(categoriesActions.CATEGORIES_GET_REQUEST),
    switchMap(data => {
      return this.jokesService.getCategories().pipe(
        map((success) => new categoriesActions.GetCategoriesSuccessAction(success)),
        catchError((error) => of(new categoriesActions.GetCategoriesErrorAction(error)))
      );
    })
  );
}
