import PrivateRoute from '../utils/PrivateRoute';

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
