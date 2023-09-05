import { createHashRouter } from 'react-router-dom';
import {
  DashboardPage,
  DetailDevicesPages,
  LoginPage,
  JustLogin,
  UnauthorizedPage,
} from '../pages';
import RequiereAuth from './utils/RequiereAuth';
import { privateAuth, privateRole } from './schema/schema.routes';

const routes = [
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <div>Halaman Tidak Tersedia!</div>,
  },
  {
    path: '/',
    element: <RequiereAuth redirectPath="/" />,
    children: [
      privateRole('dashboard', 'admin', <DashboardPage />),
      privateRole('detail-device/:id', 'admin', <DetailDevicesPages />),
      privateAuth('just-login', <JustLogin />),
    ],
  },
  {
    path: '/unauthorized',
    element: <UnauthorizedPage />,
  },
];

const router = createHashRouter(routes);

export default router;
