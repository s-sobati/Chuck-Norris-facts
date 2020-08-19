import {createSelector} from '@ngrx/store';
import {State as RootState} from '../index';
import {State as SourceListState} from './reducer';
import {Fact} from '../facts/reducer';

export const selectLists = (state: RootState) => state.lists;
export const selectFacts = (state: RootState) => state.facts.data;

export const selectSourceListData = createSelector(
  selectLists,
  (state: SourceListState) => state.source_list
);

export const selectedCategory = createSelector(
  selectLists,
  (state: SourceListState) => state.selectedCategory
);

export const selectedIsFetching = createSelector(
  selectLists,
  (state: SourceListState) => state.is_fetching
);

export const selectedFavorites = createSelector(
  selectLists,
  (state: SourceListState) => state.favorites
);

export const selectFavoritesData = createSelector(
  selectLists,
  selectFacts,
  (listState: SourceListState, factsState: Fact[]) => {
    return listState.favorites.map(favoriteId => {
    const [result] = factsState.filter(item => item.id === favoriteId);
    return result;
    });
  }
);
