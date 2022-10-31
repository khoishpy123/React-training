import { Icon } from '@iconify/react';

import styles from './Filter.module.scss';

function Filter() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.filter_btn}>
        <Icon icon="bi:filter" />
      </button>
    </div>
  );
}

export default Filter;
