import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Search from '../../.././components/Search/Search';
import HeaderLogo from '../../../assets/image/logos/logo.svg';
import config from '../../.././config/index';

const Header = () => {
  return (
    <header className={styles.header_content}>
      <div className={styles.header_logo}>
        <Link to={config.routes.dashboard}>
          <img
            src={HeaderLogo}
            className={styles.logo}
            alt="Header Logo"
          />
        </Link>
      </div>
      {/* <Search /> */}
      <div className={styles.header_account}></div>
    </header>
  );
};

export default Header;
