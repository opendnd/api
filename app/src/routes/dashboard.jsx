import DashboardPage from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import Names from 'views/Names/Names';

import {
  Dashboard,
  Person,
  Label,
} from '@material-ui/icons';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
    icon: Dashboard,
    sidebar: true,
    component: DashboardPage
  },
  {
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    sidebar: false,
    component: UserProfile
  },
  {
    path: '/names',
    sidebarName: 'Names',
    navbarName: 'Names',
    icon: Label,
    sidebar: true,
    component: Names
  },
  { 
    redirect: true,
    sidebar: false,
    path: '/',
    to: '/dashboard',
    navbarName: 'Redirect' 
  }
];

export default dashboardRoutes;
