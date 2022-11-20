import { useState, useEffect } from 'react';

// Import the Modal type
import MODAL_TYPE from '../../constants/modalType';

//import Component
import IconBtn from '../Button/IconButton/IconButton';

//styles
import styles from './Modal.module.scss';

function Modal(props) {
  const { showModal, closeModal, onSubmit, type, defaultValue } = props;

  const [avatar, setAvatar] = useState();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [verified, setVerified] = useState(Boolean);
  const [error, setError] = useState('');
  const [company, setCompany] = useState('');

  // The function to handle data in the input fields of the form
  useEffect(() => {
    // If the modal type is ADD, the input fields will be empty.
    if (type === MODAL_TYPE.ADD) {
      setName('');
      setCompany('');
      setRole('');
      setVerified(false);
      setStatus('');
    }
    //If the modal type is EDIT, the input field will be replaced by the fetched data.
    else {
      if (
        defaultValue.name &&
        defaultValue.company &&
        defaultValue.role &&
        defaultValue.status &&
        defaultValue.avatar &&
        defaultValue.verified
      ) {
        setAvatar(defaultValue.avatar);
        setName(defaultValue.name);
        setCompany(defaultValue.company);
        setRole(defaultValue.role);
        setStatus(defaultValue.status);
        setVerified(defaultValue.verified_btn);
      }
    }
    return () => {
      setError('');
    };
  }, [showModal]);

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

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

  // const handleChangeAvatar = (e) => {
  //   setAvatar(e.target.value);
  // };

  // const handleChangeStatus = (e) => {
  //   setStatus(e.target.value);
  // };

  // const handleChangeVerified = (e) => {
  //   setVerified(e.target.value);
  // };

  // The function to handle ADD or EDIt the products
  const handleAddOrEdit = () => {
    const data = {
      ...(type === MODAL_TYPE.EDIT && {
        id: defaultValue.id,
      }),
      avatar,
      name,
      company,
      role,
      status,
      verified,
    };
    const isValid = name && company && role && avatar;
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
        <h1>
          {type === MODAL_TYPE.EDIT
            ? 'Edit the user'
            : type === MODAL_TYPE.ADD
            ? 'Add new user'
            : 'Delete the user'}
        </h1>

        {type === MODAL_TYPE.DELETE ? (
          <div>
            <h2>Are you sure ?</h2>
            <p>
              Do you really want to delete this product ? This process cannot be
              undone.
            </p>
          </div>
        ) : (
          <form
            action=""
            className={styles.modal_container}
            autoComplete="off"
            method="get"
          >
            <div className={styles.avatar_block}>
              <div className={styles.avatar_user}>
                {/* <label htmlFor="avatar">chose avatar</label> */}
                {avatar && (
                  <img
                    src={avatar.preview}
                    alt="image"
                    className={styles.avatar_img}
                  />
                )}
              </div>
              <div className={styles.mr_l_10}>
                <input
                  type="file"
                  onChange={handlePreviewAvatar}
                  className={styles.avatar_input}
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className={styles.name_label}>
                Name
              </label>
              <input
                placeholder="Enter Name"
                value={name}
                className={styles.input_form}
                onChange={handleChangeName}
              />
            </div>
            <div>
              <label htmlFor="name" className={styles.name_label}>
                Company
              </label>
              <input
                placeholder="Enter Company"
                className={styles.input_form}
                value={company}
                onChange={handleChangeCompany}
              />
            </div>
            <div>
              <label htmlFor="name" className={styles.name_label}>
                Role
              </label>
              <input
                placeholder="Enter Role"
                className={styles.input_form}
                value={role}
                onChange={handleChangeRole}
              />
            </div>
            <div>
              <label htmlFor="status" className={styles.name_label}>
                Status
              </label>
              <select className={styles.form_select}>
                <option value="">Select status </option>
                <option value="Active">Active</option>
                <option value="Banned">Banned</option>
              </select>
            </div>
            <br />
            <div className={styles.verified_btn}>
              <input type="checkbox" />
              <label htmlFor="verified">Verified</label>
            </div>
          </form>
        )}
        <IconBtn
          text="Submit"
          className={styles.submitBtn}
          onClick={handleClickSubmitForm}
        />
      </div>
    </>
  ) : null;
}

export default Modal;
