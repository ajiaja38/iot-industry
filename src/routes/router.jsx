import { createHashRouter } from 'react-router-dom';
import {
  DashboardPage,
  DetailDevicesPages,
  LoginPage,
  UnauthorizedPage,
} from '../pages';
import RequiereAuth from './utils/RequiereAuth';
import PrivateRoute from './utils/PrivateRoute';

const router = createHashRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <div>Halaman Tidak Tersedia!</div>,
  },
  {
    path: '/',
    element: <RequiereAuth redirectPath="/" />,
    children: [
      /* Private Routes Admin */
      {
        path: 'dashboard',
        element: (
          <PrivateRoute redirectPath="/unauthorized" role="admin">
            <DashboardPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'detail-device/:id',
        element: (
          <PrivateRoute redirectPath="/unauthorized" role="admin">
            <DetailDevicesPages />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/unauthorized',
    element: <UnauthorizedPage />,
  },
]);

export default router;
