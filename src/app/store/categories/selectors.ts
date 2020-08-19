import {createSelector} from '@ngrx/store';
import {State as RootState} from '../index';
import {State as CategoriesState} from './reducer';

export const selectCategories = (state: RootState) => state.categories;

export const selectCategoriesData = createSelector(
  selectCategories,
  (state: CategoriesState) => state.data
);

export const selectIsFetching = createSelector(
  selectCategories,
  (state: CategoriesState) => state.is_fetching
);
