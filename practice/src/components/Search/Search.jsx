import React from 'react';
import { Icon } from '@iconify/react';

//import styles
import styles from './Search.module.scss';

function Search(props) {
  const { onchange, searchName, onclick, inputRef } = props;

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        value={searchName}
        placeholder="Search user..."
        spellCheck={false}
        onChange={onchange}
      />
      {!!searchName && (
        <button className={styles.close_btn} onClick={onclick}>
          <Icon icon="ant-design:close-circle-filled" />
        </button>
      )}
      <button className={styles.search_btn}>
        <Icon icon="ant-design:search-outlined" />
      </button>
    </div>
  );
}

export default Search;
