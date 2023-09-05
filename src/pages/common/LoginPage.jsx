import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <div>LoginPage</div>
      <NavLink to="/dashboard">
        <button className="px-2 py-1 bg-blue-500 text-white rounded-lg">
          Login
        </button>
      </NavLink>
    </>
  );
};

export default LoginPage;
