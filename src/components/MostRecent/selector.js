import { createSelector } from 'reselect';

const getIsLoading = state => state.isLoading;
const getLatestComicId = state => state.latestComicId;
const getComics = state => state.comics;

export default createSelector(
  [getLatestComicId, getComics, getIsLoading],
  (latestComicId, comics, isLoading) => {
    return {
      mostRecent: comics[latestComicId],
      isLoading
    };
  }
);
