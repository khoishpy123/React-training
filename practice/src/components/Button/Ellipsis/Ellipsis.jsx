import { useState } from 'react';
import { Icon } from '@iconify/react';
import DropDownItem from '../../DropDownItem/DropDownItem';

import styles from './Ellipsis.module.scss';

function Ellipsis({
  dropdownId,
  onClickE,
  onClickEdit,
  type,
  dataValue,
  showModal,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div></div>
      <div>
        <button className={styles.action_btn} onClick={toggle}>
          <Icon icon="clarity:ellipsis-vertical-line" />
        </button>
        {isOpen && (
          <DropDownItem
            id={dropdownId}
            onClickDelete={onClickE}
            onClickEdit={onClickEdit}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            type={type}
            dataValue={dataValue}
            showModal={showModal}
          />
        )}
      </div>
    </>
  );
}

export default Ellipsis;
