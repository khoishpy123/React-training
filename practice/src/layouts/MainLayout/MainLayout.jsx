import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';
import './MainLayout.scss';

const DefaultLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
