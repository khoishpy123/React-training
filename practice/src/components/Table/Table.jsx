import { useState } from 'react';
import { Icon } from '@iconify/react';

import { Wrapper as PopperWrapper } from '../Popper/index';
import DropDown from '../../components/DropDown/DropDown';

import styles from './Table.module.scss';

export const Table = ({ allStudents }) => {
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
          <tr key={item.id} id={item.id}>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <td>{item.role}</td>
            <td>
              <DropDown dropdownId={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
