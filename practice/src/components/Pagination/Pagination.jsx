import React, { useState, useContext } from 'react';

import Context from '../../store/Context';

// Import the components
import IconButton from '../Button/IconButton/IconButton';

import styles from './Pagination.module.scss';

const Pagination = (props) => {
  const {
    currentPage,
    onClickNextBtn,
    onClickPrevBtn,
    minPageNumberLimit,
    maxPageNumberLimit,
  } = props;
  const [state] = useContext(Context);
  const [itemsPerPage] = useState(5);
  const pages = [];

  for (let i = 1; i <= Math.ceil(state.allUsers.length / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.spacer}></div>
      <div></div>
      <p className={styles.disPlayedRows}>
        {minPageNumberLimit + 1}-{maxPageNumberLimit} of {state.allUsers.length}
      </p>
      <div className={styles.changePage_btn}>
        <IconButton
          onClick={onClickPrevBtn}
          disabled={currentPage === pages[0]}
          icon="grommet-icons:previous"
        />
        <IconButton
          onClick={onClickNextBtn}
          disabled={currentPage === pages[pages.length - 1]}
          icon="grommet-icons:next"
        />
      </div>
    </div>
  );
};

export default Pagination;
