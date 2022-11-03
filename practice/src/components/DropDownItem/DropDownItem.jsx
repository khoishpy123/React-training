import React from 'react';
import { Icon } from '@iconify/react';

//styles
import styles from './DropDownItem.module.scss';

function DropDownContent(dropdownId, setOpen) {
  console.log(dropdownId);
  return (
    <>
      <div className={styles.wrapper}>
        <li className={styles.dropDown_Item}>
          <span>
            <Icon icon="clarity:edit-solid" />
          </span>
          <span>Edit</span>
        </li>
        <li className={styles.dropDown_Item}>
          <span>
            <Icon icon="fluent:delete-12-regular" />
          </span>
          <span>Delete</span>
        </li>
      </div>
    </>
  );
}
export default DropDownContent;
