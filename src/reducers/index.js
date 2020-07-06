import {
  LOAD_COMIC_INIT,
  LOAD_COMIC_SUCCESS,
  LOAD_COMIC_ERROR,
  SET_LATEST_COMIC_ID,
  SEARCH_COMIC_INIT
} from './../constants/action-types';

const initialState = {
  comics: {},
  isLoading: false,
  latestComicId: null,
  currentSearch: null,
  error: false
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  if (type === LOAD_COMIC_INIT) {
    return {
      ...state,
      error: false,
      isLoading: payload
    };
  }

  if (type === LOAD_COMIC_SUCCESS) {
    const {comics} = state;

    comics[payload.num] = payload;
    return {
      ...state,
      isLoading: false,
      error: false,
      comics
    };
  }

  if (type === LOAD_COMIC_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: true
    };
  }

  if (type === SET_LATEST_COMIC_ID) {
    return {
      ...state,
      latestComicId: payload
    };
  }

  if (type === SEARCH_COMIC_INIT) {
    const {comics} = state;

    return {
      ...state,
      currentSearch: payload,
      isLoading: !comics[payload],
      error: false
    };
  }

  return state;
};