import React, { memo } from 'react';
import Ellipsis from '../../components/Button/Ellipsis/Ellipsis';

import './Table.module.scss';

export const Table = (props) => {
  const { allStudents, onClickDelete } = props;
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
          <tr key={item.id} id={`user-${item.id}`}>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <td>{item.role}</td>
            <td>
              <Ellipsis dropdownId={item.id} onClickE={onClickDelete} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
