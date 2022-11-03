import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import Tooltip from '@tippyjs/react';

import { Wrapper as PopperWrapper } from '../Popper/index';

import styles from './Table.module.scss';

export const Table = ({ allStudents }) => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>company</th>
          <th>role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {allStudents?.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <td>{item.role}</td>
            <td>
              <button
                user-id={item.id}
                className={styles.action_btn}
                onClick={visible ? hide : show}
              >
                <Icon icon="clarity:ellipsis-vertical-line" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
