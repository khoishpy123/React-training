import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ tablePerPage, totalTable, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTable / tablePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={styles.page_item}
            onClick={() => paginate(number)}
          >
            <a className={styles.page_link}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
