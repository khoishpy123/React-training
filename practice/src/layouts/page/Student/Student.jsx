import { useContext, useEffect, useState } from 'react';

//data
import { addStudent } from '../../../actions/student.actions';

//actions
import { setAllStudents } from '../../.././actions/student.actions';

//helpers
import { getAllStudent, postNewUser } from '../../.././helpers/services';

//stores
import { Context } from '../../../store/Context';

import Table from '../../../components/Table/Table';
import Search from '../../../components/Search/Search';
import Filter from '../../../components/Filter/Filter';
import Modal from '../../../components/Modal/Modal';

import styles from './Student.module.scss';

function Student() {
  const { state, dispatch } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const getStudentList = async () => {
    try {
      const data = await getAllStudent();
      if (data && data.length > 0) {
        dispatch(setAllStudents(data));
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const handelAdd = async (item) => {
    const data = await postNewUser(item);
    if (data) {
      dispatch(addStudent(data));
    }
  };

  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <div>
      <div className={styles.student_container}>
        <h2>User</h2>
        <button className={styles.add_btn} onClick={() => setIsOpen(true)}>
          {' '}
          ADD
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} onAdd={handelAdd} />}
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
