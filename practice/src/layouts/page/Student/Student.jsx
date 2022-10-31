import { useContext, useEffect, useState } from 'react';

//actions
import { setAllStudents } from '../../.././actions/student.actions';

//helpers
import { getAllStudent } from '../../.././helpers/services';

//stores
import { Context } from '../../.././store/Context';

import Table from '../../.././components/Table/Table';

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
    <>
      <Table allStudents={state.allStudents} />
    </>
  );
}
export default Student;
