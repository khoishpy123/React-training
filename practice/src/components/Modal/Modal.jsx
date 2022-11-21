import { useState, useEffect } from 'react';

// Import the Modal type
import MODAL_TYPE from '../../constants/modalType';

//import Component
import IconBtn from '../Button/IconButton/IconButton';

//styles
import styles from './Modal.module.scss';

const Modal = (props) => {
  const { showModal, closeModal, onSubmit, type, defaultValue } =
    props;
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [avatar, setAvatar] = useState('');
  const [status, setStatus] = useState([]);
  const [company, setCompany] = useState('');
  const [verified, setVerified] = useState(false);

  // The function to handle data in the input fields of the form
  useEffect(() => {
    // If the modal type is ADD, the input fields will be empty.
    if (type === MODAL_TYPE.ADD) {
      setAvatar('');
      setName('');
      setRole('');
      setStatus(['Select status', 'Active', 'Banned']);
      setCompany('');
      setVerified(false);
    }
    //If the modal type is EDIT, the input field will be replaced by the fetched data.
    else if (type === MODAL_TYPE.EDIT) {
      {
        setName(defaultValue.name);
        setRole(defaultValue.role);
        setStatus(defaultValue.status);
        setAvatar(defaultValue.avatar);
        setCompany(defaultValue.company);
        setVerified(defaultValue.verified);
      }
    }
    return () => {
      setError('');
    };
  }, [showModal]);

  const handelChangeAvatar = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setAvatar(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
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

  //the function to set value for verified when click checkbox
  const carStatus = (e) => {
    const { checked } = e.target;
    setVerified(checked);
  };

  const handleChangeStatus = (e) => {
    setStatus([e.target.value]);
  };

  // The function to handle ADD or EDIt the user
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
    const isValid = name && company && role && avatar && status;
    if (!isValid) {
      setError('Please enter full information !!');
      return;
    }
    const success = onSubmit(data);
    if (!success) {
      setError(
        `${
          type === MODAL_TYPE.EDIT ? 'Edit' : 'Add'
        } the User failed!`,
      );
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

  // the function to handle submit the user
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
              Do you really want to delete this product ? This process
              cannot be undone.
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
                    src={avatar}
                    alt="image"
                    className={styles.avatar_img}
                  />
                )}
              </div>
              <div className={styles.mr_l_10}>
                <input
                  type="file"
                  onChange={(e) => {
                    handelChangeAvatar(e);
                  }}
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
              <label htmlFor="company" className={styles.name_label}>
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
              <label htmlFor="role" className={styles.name_label}>
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
              <select
                className={styles.form_select}
                onChange={handleChangeStatus}
              >
                <option value={status}>{status}</option>
              </select>
            </div>
            <br />
            <div className={styles.verified_btn}>
              <input onChange={carStatus} type="checkbox" />
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
};

export default Modal;
