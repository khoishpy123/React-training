import { Icon } from '@iconify/react';

import styles from './Sidebar.module.scss';
import MenuItem from './SideBarItem/SideBarItem';
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
          to={config.routes.user}
          icon={<Icon icon="bxs:user-rectangle" />}
        />
        <MenuItem
          title="Not Found"
          to={config.routes.notfound}
          icon={<Icon icon="fe:disabled" />}
        />
      </nav>
    </aside>
  );
}
export default Sidebar;
