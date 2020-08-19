import {Component, OnInit} from '@angular/core';
import * as selectors from '../../../store/lists/selectors';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {Observable} from 'rxjs';
import {Fact} from '../../../store/facts/reducer';

@Component({
  selector: 'app-custom-list',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class CustomListComponent implements OnInit {
  public favorites$: Observable<Fact[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.favorites$ = this.store.select(selectors.selectFavoritesData);
  }
}
