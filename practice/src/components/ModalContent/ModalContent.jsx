import styles from '../Modal/Modal.module.scss';

function ModalContent(props) {
  const {
    nameValue,
    companyValue,
    roleValue,
    onNameChange,
    onCompanyChange,
    onRoleChange,
    onAvatarChange,
    avatarValue,
  } = props;

  return (
    <>
      <form
        action=""
        className={styles.modal_container}
        autoComplete="off"
        method="get"
      >
        <label htmlFor="avatar">chose avatar</label>
        <input type="file" value={avatarValue} onChange={onAvatarChange} />
        <br />
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
        <select>
          <option value="">Select status </option>
          <option value="">Active</option>
          <option value="">Banned</option>
        </select>
        <br />
        <input type="checkbox"></input>
      </form>
    </>
  );
}
export default ModalContent;
