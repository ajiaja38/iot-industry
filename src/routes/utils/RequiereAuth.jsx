import { Navigate, Outlet } from 'react-router-dom';

const RequiereAuth = ({ redirectPath }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate to={redirectPath} />;

  return <Outlet />;
};

export default RequiereAuth;
