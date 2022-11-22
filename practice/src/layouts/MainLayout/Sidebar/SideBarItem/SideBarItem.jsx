import { NavLink } from 'react-router-dom';
import styles from './SideBarItem.module.scss';

function MenuItem({ title, to, icon }) {
  return (
    <NavLink className={styles.menu_item} to={to} end>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
