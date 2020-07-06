import { createSelector } from 'reselect';

const getIsLoading = state => state.isLoading;
const getCurrentSearch = state => state.currentSearch;
const getComics = state => state.comics;
const getError = state => state.error;

export default createSelector(
  [getCurrentSearch, getComics, getIsLoading, getError],
  (currentSearchId, comics, isLoading, error) => {
    return {
      selected: comics[currentSearchId],
      isLoading,
      currentSearchId,
      error
    };
  }
);
