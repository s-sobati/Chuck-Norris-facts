import {Component, OnInit} from '@angular/core';
import * as selectors from '../../../store/lists/selectors';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {Observable} from 'rxjs';
import {Fact} from 'src/app/store/facts/reducer';

@Component({
  selector: 'app-source-list',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class SourceListComponent implements OnInit {
  public sourceList$: Observable<Fact[]>;
  public selectedCategory$: Observable<string>;
  public isFetching$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.sourceList$ = this.store.select(selectors.selectSourceListData);
    this.selectedCategory$ = this.store.select(selectors.selectedCategory);
    this.isFetching$ = this.store.select(selectors.selectedIsFetching);
  }
}
