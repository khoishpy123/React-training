import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import the Modal type
import MODAL_TYPE from '../../constants/modalType';

//import Component
import ModalContent from '../ModalContent/ModalContent';
import IconBtn from '../Button/IconButton/IconButton';
import Title from '../Title/Title';
import NormalButton from '../Button/NormalButton/NormalButton';

//styles
import styles from './Modal.module.scss';

function Modal(props) {
  const { showModal, closeModal, onSubmit, type, defaultValue } = props;

  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [company, setCompany] = useState('');

  // The function to handle data in the input fields of the form
  useEffect(() => {
    // If the modal type is ADD, the input fields will be empty.
    if (type === MODAL_TYPE.ADD) {
      setName('');
      setCompany('');
      setRole('');
    }
    //If the modal type is EDIT, the input field will be replaced by the fetched data.
    else {
      if (defaultValue.name && defaultValue.company && defaultValue.role) {
        setName(defaultValue.name);
        setCompany(defaultValue.company);
        setRole(defaultValue.role);
      }
    }
    return () => {
      setError('');
    };
  }, [showModal]);

  // The function to handle changing the name
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // The function to handle changing the company
  const handleChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  // The function to handle changing the role
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  // The function to handle ADD or EDIt the products
  const handleAddOrEdit = () => {
    const data = {
      ...(type === MODAL_TYPE.EDIT && {
        id: defaultValue.id,
      }),
      name,
      company,
      role,
    };
    const isValid = name && company && role;
    if (!isValid) {
      setError('Please enter full information !!');
      return;
    }
    const success = onSubmit(data);
    if (!success) {
      setError(`${type === MODAL_TYPE.EDIT ? 'Edit' : 'Add'} the User failed!`);
    } else {
      closeModal();
    }
  };

  // The function to handle Delete the product
  const handleDeleteUser = () => {
    const success = onSubmit({ id: defaultValue.id });
    if (!success) {
      setError('Delete the product failed!');
    } else {
      closeModal();
    }
  };

  const handleClickSubmitForm = () => {
    switch (type) {
      case MODAL_TYPE.ADD:
      case MODAL_TYPE.EDIT:
        handleAddOrEdit();
        break;
      case MODAL_TYPE.DELETE:
        handleDeleteUser();
        break;
      default:
    }
  };

  return showModal ? (
    <>
      <div className={styles.darkBG} />
      <div className={styles.modal_wrapper}>
        <IconBtn
          icon={'ant-design:close-outlined'}
          onClick={closeModal}
          className={styles.closeBtn}
        />
        <Title
          title={
            type === MODAL_TYPE.EDIT
              ? 'Edit the user'
              : type === MODAL_TYPE.ADD
              ? 'Add new user'
              : 'Delete the user'
          }
        />
        {type === MODAL_TYPE.DELETE ? (
          <div>
            <h2>Are you sure ?</h2>
            <p>
              Do you really want to delete this product ? This process cannot be
              undone.
            </p>
          </div>
        ) : (
          <ModalContent
            nameValue={name}
            onNameChange={handleChangeName}
            companyValue={company}
            onCompanyChange={handleChangeCompany}
            roleValue={role}
            onRoleChange={handleChangeRole}
            onClick={handleClickSubmitForm}
          />
        )}
        <NormalButton
          text="Submit"
          className={styles.submitBtn}
          onClick={handleClickSubmitForm}
        />
      </div>
    </>
  ) : null;
}

export default Modal;
