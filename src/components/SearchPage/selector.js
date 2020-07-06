import { createSelector } from 'reselect';

const getIsLoading = state => state.isLoading;
const getCurrentSearch = state => state.currentSearch;
const getComics = state => state.comics;

export default createSelector(
  [getCurrentSearch, getComics, getIsLoading],
  (currentSearchId, comics, isLoading) => {
    return {
      selected: comics[currentSearchId],
      isLoading,
      currentSearchId
    };
  }
);
