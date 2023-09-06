import { createHashRouter } from 'react-router-dom';
import { adminPage, commonPage, errorPage } from '../pages';
import {
  privateAuth,
  privateRole,
  requiereAuthSchema,
} from './schema/schema.routes';

const routes = [
  {
    path: '/',
    element: commonPage.login,
    errorElement: <div>Halaman Tidak Tersedia!</div>,
  },
  {
    path: '/',
    element: requiereAuthSchema('/'),
    children: [
      privateRole('dashboard', 'admin', adminPage.dashboard),
      privateRole('detail-device/:id', 'admin', adminPage.detailDevice),
      privateAuth('just-login', commonPage.JustLogin),
    ],
  },
  {
    path: '/unauthorized',
    element: errorPage.UnauthorizedPage,
  },
];

const router = createHashRouter(routes);

export default router;
