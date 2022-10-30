import DashBoard from '../layouts/page/DashBoard/DashBoard';
import Student from '../layouts/page/Student/Student';
import routesConfig from '../config/routes';
const routes = [
  { path: routesConfig.dashboard, component: DashBoard },
  { path: routesConfig.student, component: Student },
];

export { routes };
