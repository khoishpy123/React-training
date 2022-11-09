import { useContext, useEffect, useState, useCallback, useRef } from 'react';

//actions
import {
  addUser,
  deleteUser,
  setAllUsers,
  editUser,
} from '../../../actions/user.actions';

//helpers
import {
  getAllUserAPI,
  postNewUserAPI,
  deleteUserAPI,
  getUserApi,
  editUserAPI,
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
import Title from '../../../components/Title/Title';
import Pagination from '../../../components/Pagination/Pagination';

// import styles
import styles from './User.module.scss';

function UserPage() {
  const [state, dispatch] = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState();
  const [idDelete, setIdDelete] = useState('');
  const [userData, setUserData] = useState({});
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(5);

  const inputRef = useRef();

  const getUserList = async () => {
    try {
      const data = await getAllUserAPI();
      if (data) {
        dispatch(setAllUsers(data));
      }
    } catch (e) {
      setError(e.message);
    }
  };

  console.log(state.allUsers);

  const getUser = async (id) => {
    const data = await getUserApi(id);
    setUserData(data);
  };

  // Handle when the user clicks on the ADD button.
  const handleClickAdd = () => {
    setType(MODAL_TYPE.ADD);
    setShowModal(true);
  };

  // Handle when the user clicks on the DELETE button.
  const handleClickDelete = useCallback(
    (id) => {
      setType(MODAL_TYPE.DELETE);
      setIdDelete(id);
      setShowModal(true);
    },
    [idDelete],
  );

  // handel when the user clicks delete
  const handleClickEdit = (id) => {
    getUser(id);
    setType(MODAL_TYPE.EDIT);
    setShowModal(true);
  };

  // the function call API to add new users
  const handelAddUser = async (item) => {
    const data = await postNewUserAPI(item);
    if (data) {
      dispatch(addUser(data));
      return true;
    }
    return false;
  };

  // Handle delete the user
  const handleDeleteUser = async () => {
    const data = await deleteUserAPI(idDelete);
    if (data) {
      dispatch(deleteUser(idDelete));
    }
  };

  // The function to handle editing the user
  const handleEditUser = async (user) => {
    const data = await editUserAPI(user);
    if (data) {
      setUserData(data);
      dispatch(editUser(user));
    }
  };

  // the function to handle close modal
  const handelCloseModal = () => {
    setShowModal(false);
  };

  //  The function to handle when the search input changes
  const handleSearchByName = (e) => {
    const search = e.target.value;
    setSearchName(search);
  };

  // the function to handle when click clear button in the search
  const handelClickClearSearchButton = () => {
    setSearchName('');
    inputRef.current.focus();
  };

  // Get current posts
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const currentTable = state.allUsers.slice(
    indexOfFirstTable,
    indexOfLastTable,
  );

  // Change page
  const handelClickChangeTable = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div>
      <div className={styles.user_container}>
        <Title title="User" />
        <NormalButton
          className={styles.add_btn}
          text="ADD NEW USER"
          onClick={handleClickAdd}
        />
      </div>
      <div className={styles.table_wrapper}>
        <div className={styles.tool_bar}>
          <Search
            onchange={handleSearchByName}
            searchName={searchName}
            onclick={handelClickClearSearchButton}
            inputRef={inputRef}
          />
          <Filter />
        </div>
        <Table
          onClickDelete={handleClickDelete}
          onClickEdit={handleClickEdit}
          dataValue={userData}
          showModal={showModal}
          searchName={searchName}
          allUsers={currentTable}
        />
        <Modal
          onSubmit={
            type === MODAL_TYPE.ADD
              ? handelAddUser
              : type === MODAL_TYPE.EDIT
              ? handleEditUser
              : handleDeleteUser
          }
          defaultValue={type === MODAL_TYPE.ADD ? state.allUsers : userData}
          type={type}
          showModal={showModal}
          closeModal={handelCloseModal}
        />
      </div>
      <Pagination
        tablePerPage={tablePerPage}
        totalTable={state.allUsers.length}
        paginate={handelClickChangeTable}
      />
    </div>
  );
}
export default UserPage;
