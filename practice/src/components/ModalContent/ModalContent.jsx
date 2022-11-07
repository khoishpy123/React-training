import NormalButton from '../Button/NormalButton/NormalButton';

import styles from '../Modal/Modal.module.scss';

function ModalContent(props) {
  const {
    nameValue,
    companyValue,
    roleValue,
    onNameChange,
    onCompanyChange,
    onRoleChange,
  } = props;

  return (
    <>
      <form
        action=""
        className={styles.modal_container}
        autoComplete="off"
        method="get"
      >
        <input
          placeholder="Enter Name"
          value={nameValue}
          className={styles.input_form}
          onChange={onNameChange}
        />
        <br />
        <input
          placeholder="Enter Company"
          className={styles.input_form}
          value={companyValue}
          onChange={onCompanyChange}
        />
        <br />
        <input
          placeholder="Enter Role"
          className={styles.input_form}
          value={roleValue}
          onChange={onRoleChange}
        />
        <br />
      </form>
    </>
  );
}
export default ModalContent;
