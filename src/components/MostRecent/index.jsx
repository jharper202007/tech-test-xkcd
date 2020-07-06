import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import mostRecentSelector from './selector';
import { loadComic } from './../../actions/xkcd';
import Comic from './../Comic';

const MostRecent = () => {
  const dispatch = useDispatch();
  const {mostRecent, isLoading} = useSelector(mostRecentSelector);

  useEffect(() => {
    // If most recent comic does not already exist in store
    // load it from API
    if (!mostRecent) {
      dispatch(loadComic(0));
    }
  }, [dispatch, mostRecent]);

  return (
    <div>
      {isLoading && <div>LOADING...</div>}
      {mostRecent && <Comic xkcd={mostRecent} />}
    </div>
  );
};

export default MostRecent;