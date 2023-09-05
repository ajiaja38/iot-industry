import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectPath, role, children }) => {
  const roleLogged = 'admin';

  if (roleLogged && roleLogged !== role) return <Navigate to={redirectPath} />;

  return children;
};

export default PrivateRoute;
