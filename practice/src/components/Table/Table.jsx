import React from 'react';
import Ellipsis from '../../components/Button/Ellipsis/Ellipsis';

import styles from './Table.module.scss';

export const Table = (props) => {
  const {
    allUsers,
    onClickDelete,
    onClickEdit,
    type,
    dataValue,
    showModal,
    searchName,
    itemsPerPage,
    currentPage,
  } = props;

  // Get current posts
  const indexOfLastTable = currentPage * itemsPerPage;
  const indexOfFirstTable = indexOfLastTable - itemsPerPage;
  const currentTable = allUsers.slice(indexOfFirstTable, indexOfLastTable);

  return (
    <>
      <table className={styles.table_wrapper}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Company</th>
            <th>Role</th>
            <th>Verified</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentTable
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
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className={styles.table_name}>
                    <img
                      src={item.avatar}
                      alt="avatar image"
                      className={styles.avatar_image}
                    />
                    <p className={styles.user_name}>{item.name}</p>
                  </div>
                </td>
                <td>{item.company}</td>
                <td>{item.role}</td>
                <td>{item.verified}</td>
                <td>{item.status}</td>
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
