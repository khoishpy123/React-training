import { useContext, useEffect, useState, useRef } from 'react';

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
import Context from '../../../store/Context';

// Import the Modal type
import MODAL_TYPE from '../../../constants/modalType';

// Import the components
import IconBtn from '../../../components/Button/IconButton/IconButton';
import Table from '../../../components/Table/Table';
import Search from '../../../components/Search/Search';
import Filter from '../../../components/Button/Filter/Filter';
import Modal from '../../../components/Modal/Modal';
import Pagination from '../../../components/Pagination/Pagination';

// import styles
import styles from './User.module.scss';

const UserPage = () => {
  const [state, dispatch] = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState();
  const [idDelete, setIdDelete] = useState('');
  const [userData, setUserData] = useState({});
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const inputRef = useRef();

  useEffect(() => {
    getUserList();
  }, []);

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

  const getUser = async (id) => {
    const data = await getUserApi(id);
    setUserData(data);
    setShowModal(true);
  };

  // Handle when the user clicks on the ADD button.
  const handleClickAdd = () => {
    setType(MODAL_TYPE.ADD);
    setShowModal(true);
  };

  // handel when the user clicks edit button
  const handleClickEdit = (id) => {
    getUser(id);
    setType(MODAL_TYPE.EDIT);
  };

  // Handle when the user clicks on the delete button.
  const handleClickDelete = (id) => {
    setIdDelete(id);
    setShowModal(true);
    setType(MODAL_TYPE.DELETE);
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
      getUserList();
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

  // the function to handle when click next button in the pagination
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    setMinPageNumberLimit(minPageNumberLimit + 5);
    setMaxPageNumberLimit(maxPageNumberLimit + 5);
  };

  // the function to handle when click prev button in the pagination
  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    setMinPageNumberLimit(minPageNumberLimit - 5);
    setMaxPageNumberLimit(maxPageNumberLimit - 5);
  };

  return (
    <div>
      <div className={styles.user_container}>
        <h2>User</h2>
        <IconBtn
          className={styles.add_btn}
          text="New User"
          icon={'fe:plus'}
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
          showModal={showModal}
          searchName={searchName}
          allUsers={state.allUsers}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <Modal
          onSubmit={
            type === MODAL_TYPE.ADD
              ? handelAddUser
              : type === MODAL_TYPE.EDIT
              ? handleEditUser
              : handleDeleteUser
          }
          defaultValue={
            type === MODAL_TYPE.ADD ? state.allUsers : userData
          }
          type={type}
          showModal={showModal}
          closeModal={handelCloseModal}
        />
        <Pagination
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          onClickNextBtn={handleNextBtn}
          onClickPrevBtn={handlePrevBtn}
          minPageNumberLimit={minPageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
        />
      </div>
    </div>
  );
};
export default UserPage;
