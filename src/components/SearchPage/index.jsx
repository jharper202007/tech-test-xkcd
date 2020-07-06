import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import searchPageSelector from './selector';
import { searchForComic, loadComic } from './../../actions/xkcd';
import styles from './search.module.css';
import Comic from './../Comic';

const SearchPage = () => {
  const dispatch = useDispatch();
  const {isLoading, currentSearchId, selected} = useSelector(searchPageSelector);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    if (currentSearchId && !selected) {
      dispatch(loadComic(currentSearchId));
    }
  }, [currentSearchId, selected, dispatch])

  return (
    <div>
      <div>Find comic by ID</div>
      <input
        type="number"
        className={styles.searchbox}
        min={0}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm || currentSearchId || ''}
        disabled={isLoading}
      />
      <button
        className={styles.submit}
        onClick={(e) => {
          console.log(e);
          dispatch(searchForComic(searchTerm));
        }}
        disabled={isLoading}
      >
        Search
      </button>

      {isLoading && <div>LOADING...</div>}
      {selected && <Comic xkcd={selected} />}
    </div>
  );
};

export default SearchPage;