import {Component, OnInit} from '@angular/core';
import * as categoriesAction from '../../../store/categories/actions';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import * as selectors from 'src/app/store/categories/selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class CategoriesComponent implements OnInit {
  public categories$: Observable<string[]>;
  public isFetching$: Observable<boolean>;
  public selectedCategory: string;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new categoriesAction.GetCategoriesAction());
    this.categories$ = this.store.select(selectors.selectCategoriesData);
    this.isFetching$ = this.store.select(selectors.selectIsFetching);
  }

  public onSelectCategory(item: string): void {
    this.selectedCategory = item;
    console.log(item);
  }
}
