import { Icon } from '@iconify/react';

import styles from './Sidebar.module.scss';
import MenuItem from './SideBarItem/SideBarItem';
import config from '../../.././config/index';

function Sidebar() {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.box_content}>
        <div className={styles.box_avatar}>
          <div className={styles.avatar_image}></div>
          <h6 className={styles.avatar_name}>Jay Frankie</h6>
        </div>
      </div>
      <div>
        <nav className={styles.nav_sidebar}>
          <MenuItem
            title="Dashboard"
            to={config.routes.dashboard}
            icon={<Icon icon="ant-design:line-chart-outlined" />}
          />
          <MenuItem
            title="User"
            to={config.routes.user}
            icon={<Icon icon="bxs:user-rectangle" />}
          />
          <MenuItem
            title="Not Found"
            to={config.routes.notfound}
            icon={<Icon icon="fe:disabled" />}
          />
        </nav>
      </div>
    </aside>
  );
}
export default Sidebar;
