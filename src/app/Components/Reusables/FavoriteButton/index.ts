import {Component, Input, OnInit} from '@angular/core';
import * as ListsAction from '../../../store/lists/actions';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import * as selectors from '../../../store/lists/selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() id: string;
  public favorites$: Observable<string[]>;
  public isFaved: boolean;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.favorites$ = this.store.select(selectors.selectedFavorites);
    this.favorites$.subscribe(item => this.isFaved = item.includes(this.id));
  }

  public addToFavorites(id: string): void {
    this.store.dispatch(new ListsAction.AddToFavoritesAction(id));
  }

  public deleteFromFavorites(id: string): void {
    this.store.dispatch(new ListsAction.DeleteFromFavoritesAction(id));
  }
}
