import { useContext, useEffect, useState, useCallback } from 'react';

//actions
import {
  addStudent,
  deleteStudent,
  setAllStudents,
} from '../../../actions/student.actions';

//helpers
import {
  getAllStudent,
  postNewUser,
  deleteUser,
} from '../../../helpers/user.services';

//stores
import { Context } from '../../../store/Context';

// Import the Modal type
import MODAL_TYPE from '../../../constants/modalType';

// Import the components
import NormalButton from '../../../components/Button/NormalButton/NormalButton';
import Table from '../../../components/Table/Table';
import Search from '../../../components/Search/Search';
import Filter from '../../../components/Button/Filter/Filter';
import Modal from '../../../components/Modal/Modal';
import Ellipsis from '../../../components/Button/Ellipsis/Ellipsis';
import IconButton from '../../../components/Button/IconButton/IconButton';
import DropDownItem from '../../../components/DropDownItem/DropDownItem';
import Title from '../../../components/Title/Title';

import styles from './Student.module.scss';

function StudentPage() {
  const [state, dispatch] = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState(MODAL_TYPE.ADD);
  const [idDelete, setIdDelete] = useState('');

  const getStudentList = async () => {
    try {
      const data = await getAllStudent();
      if (data) {
        dispatch(setAllStudents(data));
      }
    } catch (e) {
      setError(e.message);
    }
  };

  // Handle when the user clicks on the ADD button.
  const handleClickAdd = () => {
    setType(MODAL_TYPE.ADD);
    setShowModal(true);
  };

  const handleClickEdit = () => {
    setShowModal(true);
  };

  const handelAddUser = async (item) => {
    const data = await postNewUser(item);
    if (data) {
      dispatch(addStudent(data));
      return true;
    }
    return false;
  };

  console.log(state.allStudents);

  // Handle when the user clicks on the DELETE button.
  const handleClickDelete = useCallback(
    (id) => {
      setType(MODAL_TYPE.DELETE);
      setIdDelete(id);
      setShowModal(true);
    },
    [idDelete],
  );

  // Handle delete the user
  const handleDeleteUser = async () => {
    const data = await deleteUser(idDelete);
    if (data) {
      dispatch(deleteStudent(idDelete));
    }
  };

  const handelCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <div>
      <div className={styles.student_container}>
        <Title title="User" />
        <NormalButton
          className={styles.add_btn}
          text="ADD NEW USER"
          onClick={handleClickAdd}
        />
      </div>
      <div className={styles.table_wrapper}>
        <div className={styles.tool_bar}>
          <Search />
          <Filter />
        </div>
        <Table
          allStudents={state.allStudents}
          onClickEdit={handleClickAdd}
          onClickDelete={handleClickDelete}
        />
        <Modal
          defaultValue={state.allStudents}
          onSubmit={type === MODAL_TYPE.ADD ? handelAddUser : handleDeleteUser}
          type={type}
          showModal={showModal}
          closeModal={handelCloseModal}
        />
      </div>
    </div>
  );
}
export default StudentPage;
