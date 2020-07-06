import axios from 'axios';

import {
  LOAD_COMIC_INIT,
  LOAD_COMIC_ERROR,
  LOAD_COMIC_SUCCESS,
  SET_LATEST_COMIC_ID
} from './../constants/action-types';

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

const loadComicInit = (id) => ({
  type: LOAD_COMIC_INIT,
  payload: id
});

export const loadComic = (id) => (dispatch) => {
  const xkcd = id === 0 ? 'latest' : id;
  dispatch(loadComicInit(xkcd));

  return axios.get(`https://xkcd.now.sh/?comic=${xkcd}`)
  .then(res => {
    dispatch({
      type: LOAD_COMIC_SUCCESS,
      payload: res.data
    });

    if (id === 0) {
      dispatch({
        type: SET_LATEST_COMIC_ID,
        payload: res.data.num
      });
    }
  })
    .catch(err => {
      dispatch({
        type: LOAD_COMIC_ERROR,
        payload: err
      });
  });
}
