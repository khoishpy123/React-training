import { useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Icon } from '@iconify/react';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '../Popper/index';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const inputRef = useRef();

  const handelClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <Tippy
      interactive
      visible={searchResult.length > 0}
      render={(attrs) => (
        <div className={styles.search_result} tabIndex="-1" {...attrs}>
          <PopperWrapper>Ket quả</PopperWrapper>
        </div>
      )}
    >
      <div className={styles.search}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search student..."
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!!searchValue && (
          <button className={styles.close_btn} onClick={handelClear}>
            <Icon icon="ant-design:close-circle-filled" />
          </button>
        )}
        <button className={styles.search_btn}>
          <Icon icon="ant-design:search-outlined" />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
