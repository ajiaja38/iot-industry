import PrivateRoute from '../utils/PrivateRoute';
import RequiereAuth from '../utils/RequiereAuth';

export const requiereAuthSchema = (redirectPath) => {
  return <RequiereAuth redirectPath={redirectPath} />;
};

export const privateRole = (path, role, element) => {
  return {
    path,
    element: (
      <PrivateRoute redirectPath="/unauthorized" role={role}>
        {element}
      </PrivateRoute>
    ),
  };
};

export const privateAuth = (path, element) => {
  return {
    path,
    element,
  };
};
