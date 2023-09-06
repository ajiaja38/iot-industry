import { Navigate, Outlet } from 'react-router-dom';

const RequiereAuth = ({ redirectPath }) => {
  const isAuthenticated = true;

  isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default RequiereAuth;
