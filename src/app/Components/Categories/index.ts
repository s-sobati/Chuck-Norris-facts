import {Component, OnInit} from '@angular/core';
import * as categoriesAction from '../../store/categories/actions';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import * as selectors from 'src/app/store/categories/selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class CategoriesComponent implements OnInit {
  public categories$: Observable<string[]>;
  public selectedCategory: string;
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new categoriesAction.GetCategoriesAction());
    this.categories$ = this.store.select(selectors.selectCategoriesData);
  }

  public onSelectCategory(item: string): void {
    this.selectedCategory = item;
    console.log(item);
  }
}
