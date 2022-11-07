import DashBoard from '../layouts/page/DashBoardPage/DashBoardPage';
import StudentPage from '../layouts/page/StudentPage/StudentPage';
import NotFound from '../layouts/page/NotFound/NotFound';
import routesConfig from '../config/routes';
const routes = [
  { path: routesConfig.dashboard, component: DashBoard },
  { path: routesConfig.student, component: StudentPage },
  { path: routesConfig.notfound, component: NotFound },
];

export { routes };
