import { Icon } from '@iconify/react';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu/index';
import config from '../../.././config/index';

function Sidebar() {
  return (
    <aside className={styles.wrapper}>
      <nav className={styles.nav_sidebar}>
        <MenuItem
          title="Dashboard"
          to={config.routes.dashboard}
          icon={<Icon icon="ant-design:line-chart-outlined" />}
        />
        <MenuItem
          title="Student"
          to={config.routes.student}
          icon={<Icon icon="bxs:user-rectangle" />}
        />
      </nav>
    </aside>
  );
}
export default Sidebar;
