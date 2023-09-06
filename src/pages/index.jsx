import LoginPage from './common/LoginPage';
import DashboardPage from './admin/DashboardPage';
import DetailDevicesPages from './admin/DetailDevicesPages';
import JustLogin from './admin/JustLogin';
import UnauthorizedPage from './error/UnauthorizedPage';

export const commonPage = {
  login: <LoginPage />,
};

export const adminPage = {
  dashboard: <DashboardPage />,
  detailDevice: <DetailDevicesPages />,
  JustLogin: <JustLogin />,
};

export const errorPage = {
  UnauthorizedPage: <UnauthorizedPage />,
};
