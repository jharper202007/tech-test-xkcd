import reducer from '.';
import {
  LOAD_COMIC_INIT,
  LOAD_COMIC_SUCCESS,
  LOAD_COMIC_ERROR,
  SET_LATEST_COMIC_ID,
  SEARCH_COMIC_INIT
} from './../constants/action-types';

let initialState = {
  comics: {},
  isLoading: false,
  latestComicId: null,
  currentSearch: null,
  error: false
};

describe('reducer tests', () => {
  beforeEach(() => {
    initialState = {
      comics: {},
      isLoading: false,
      latestComicId: null,
      currentSearch: null,
      error: false
    };
  });

  it('sets loading flag as expected', () => {
    const action = {
      type: LOAD_COMIC_INIT,
      payload: 123
    };

    let state = reducer(initialState, action);
    expect(state.isLoading).toBe(123);
    // No comics loaded at this point
    expect(Object.keys(state.comics).length).toBe(0);
  });

  it('updates comics data upon success', () => {
    const exampleComic = {
      num: 123,
      title: 'test',
      alt: 'test comic'
    };

    const action = {
      type: LOAD_COMIC_SUCCESS,
      payload: exampleComic
    };

    let state = reducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(false);
    expect(Object.keys(state.comics).length).toBe(1);
    expect(state.comics[123]).toBe(exampleComic);
  });

  it('handles loading errors appropriately', () => {
    const action = {
      type: LOAD_COMIC_ERROR,
      payload: 'some error message'
    };

    let state = reducer(initialState, action);
    expect(state.error).toBe(true);
    expect(state.isLoading).toBe(false);
  });

  it('does not call API when searching for a comic we already have data for', () => {
    const exampleComic = {
      num: 123,
      title: 'test',
      alt: 'test comic'
    };

    let state = reducer(initialState, {
      type: LOAD_COMIC_SUCCESS,
      payload: exampleComic
    });

    expect(state.comics[123]).toBe(exampleComic);

    state = reducer(state, {
      type: SEARCH_COMIC_INIT,
      payload:123
    });

    expect(state.isLoading).toBe(false);
    expect(state.comics[123]).toBe(exampleComic);
    expect(state.currentSearch).toBe(123);
  });

  it('loads data from API if searching for a comic we do not have data for', () => {
    let state = reducer(initialState, {
      type: SEARCH_COMIC_INIT,
      payload: 123
    });

    expect(state.isLoading).toBe(true);
    expect(state.comics[123]).toBe(undefined);
    expect(state.currentSearch).toBe(123);
  });

  it('does not set latest comic id on every load', () => {
    const exampleComic = {
      num: 123,
      title: 'test',
      alt: 'test comic'
    };

    const action = {
      type: LOAD_COMIC_SUCCESS,
      payload: exampleComic
    };

    let state = reducer(initialState, action);
    expect(state.latestComicId).toBe(null);
  });
});
