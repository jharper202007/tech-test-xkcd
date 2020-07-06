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
  if (action.type === LOAD_COMIC_INIT) {
    return {
      ...state,
      error: false,
      isLoading: action.payload
    };
  }

  if (action.type === LOAD_COMIC_SUCCESS) {
    const {comics} = state;

    comics[action.payload.num] = action.payload;
    return {
      ...state,
      isLoading: false,
      error: false,
      comics
    };
  }

  if (action.type === LOAD_COMIC_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: true
    };
  }

  if (action.type === SET_LATEST_COMIC_ID) {
    return {
      ...state,
      latestComicId: action.payload
    };
  }

  if (action.type === SEARCH_COMIC_INIT) {
    return {
      ...state,
      currentSearch: action.payload,
      isLoading: true,
      error: false
    };
  }

  return state;
};