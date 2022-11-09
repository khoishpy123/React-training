import React from 'react';
import Ellipsis from '../../components/Button/Ellipsis/Ellipsis';

import './Table.module.scss';

export const Table = (props) => {
  const {
    allUsers,
    onClickDelete,
    onClickEdit,
    type,
    dataValue,
    showModal,
    searchName,
  } = props;

  return (
    <>
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
          {allUsers
            ?.filter((item) => {
              if (searchName == '') {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchName.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.role}</td>
                <td>
                  <Ellipsis
                    dropdownId={item.id}
                    onClickE={onClickDelete}
                    onClickEdit={onClickEdit}
                    type={type}
                    dataValue={dataValue}
                    showModal={showModal}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
