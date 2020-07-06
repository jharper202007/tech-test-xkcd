import { LOAD_COMIC_INIT, LOAD_COMIC_SUCCESS, SET_LATEST_COMIC_ID } from './../constants/action-types';

const initialState = {
  comics: {},
  isLoading: false,
  latestComicId: null
};

export default (state = initialState, action) => {
  if (action.type === LOAD_COMIC_INIT) {
    return {
      ...state,
      isLoading: action.payload
    };
  }

  if (action.type === LOAD_COMIC_SUCCESS) {
    const {comics} = state;

    comics[action.payload.num] = action.payload;
    return {
      isLoading: false,
      comics
    };
  }

  if (action.type === SET_LATEST_COMIC_ID) {
    return {
      ...state,
      latestComicId: action.payload
    };
  }

  return state;
};