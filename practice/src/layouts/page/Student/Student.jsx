import { useContext, useEffect, useState } from 'react';

//actions
import { setAllStudents } from '../../.././actions/student.actions';

//helpers
import { getAllStudent } from '../../.././helpers/services';

//stores
import { Context } from '../../../store/Context';

import Table from '../../../components/Table/Table';
import Search from '../../../components/Search/Search';
import Filter from '../../../components/Filter/Filter';

import styles from './Student.module.scss';

function Student() {
  const { state, dispatch } = useContext(Context);

  const getStudentList = async () => {
    try {
      const data = await getAllStudent();
      dispatch(setAllStudents(data));
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <div>
      <div className={styles.student_container}>
        <h2>User</h2>
        <button className={styles.add_btn}> ADD</button>
      </div>
      <div className={styles.table_wrapper}>
        <div className={styles.tool_bar}>
          <Search />
          <Filter />
        </div>
        <Table allStudents={state.allStudents} />
      </div>
    </div>
  );
}
export default Student;
