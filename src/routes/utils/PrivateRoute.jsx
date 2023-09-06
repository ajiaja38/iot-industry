import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectPath, role, children }) => {
  const roleLogged = 'admin';

  roleLogged && roleLogged !== role ? <Navigate to={redirectPath} /> : children;
};

export default PrivateRoute;
