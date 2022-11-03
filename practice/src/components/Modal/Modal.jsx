import { useState, useContext, useRef } from 'react';

//data
import { addStudent } from '../../actions/student.actions';

//helpers
import { postNewUser } from '../../helpers/services';

//stores
import { Context } from '../../store/Context';

import getStudentList from '../.././layouts/page/Student/Student';

//styles
import styles from './Modal.module.scss';

function Modal({ setIsOpen, onAdd }) {
  const { dispatch } = useContext(Context);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleClickSubmitForm = async () => {
    if (name && company && role) {
      const newStudents = { name, company, role };
      if (onAdd) {
        onAdd(newStudents);
      }
      setIsOpen(false);
    } else {
      setError('Please check and enter the full information !!');
    }
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.modal_wrapper}>
        <form action="" className={styles.modal_container} autoComplete="off" method="get">
          <button type="button" className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <h1 id="form-title">Add User</h1>
          <input
            type="name"
            name="name"
            placeholder="Enter Name"
            value={name}
            className={styles.input_form}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <input
            type="text"
            name="company"
            placeholder="Enter Company"
            className={styles.input_form}
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
          <br />
          <input
            type="text"
            name="role"
            placeholder="Enter Role"
            className={styles.input_form}
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <br />
          <input type="hidden" id="employee-id" />
          <button
            type="button"
            name="submit"
            className={styles.deleteBtn}
            onClick={handleClickSubmitForm}
          >
            Insert Record
          </button>
        </form>
      </div>
      {/* <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <div className={styles.modalContent}>Are you sure you want to delete the item?</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Modal;
