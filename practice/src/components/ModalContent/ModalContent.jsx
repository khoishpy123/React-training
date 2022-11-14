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
        <div>
          <label htmlFor="name" className={styles.name_label}>
            Name
          </label>
          <input
            placeholder="Enter Name"
            value={nameValue}
            className={styles.input_form}
            onChange={onNameChange}
          />
        </div>
        <div>
          <label htmlFor="name" className={styles.name_label}>
            Company
          </label>
          <input
            placeholder="Enter Company"
            className={styles.input_form}
            value={companyValue}
            onChange={onCompanyChange}
          />
        </div>
        <div>
          <label htmlFor="name" className={styles.name_label}>
            Role
          </label>
          <input
            placeholder="Enter Role"
            className={styles.input_form}
            value={roleValue}
            onChange={onRoleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="verified">Verified</label>
          <input type="checkbox"></input>
        </div>
        <div>
          <label htmlFor="status" className={styles.name_label}>
            Status
          </label>
          <select className={styles.form_select}>
            <option value="">Select status </option>
            <option value="">Active</option>
            <option value="">Banned</option>
          </select>
        </div>
      </form>
    </>
  );
}
export default ModalContent;
