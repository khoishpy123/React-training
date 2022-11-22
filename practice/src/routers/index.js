import DashBoard from '../layouts/page/DashBoardPage/DashBoardPage';
import UserPage from '../layouts/page/UserPage/UserPage';
import NotFound from '../layouts/page/NotFound/NotFound';
import routesConfig from '../config/routes';
const routes = [
  { path: routesConfig.dashboard, component: DashBoard },
  { path: routesConfig.user, component: UserPage },
  { path: routesConfig.notfound, component: NotFound },
];

export { routes };
