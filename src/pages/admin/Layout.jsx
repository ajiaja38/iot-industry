import Navbar from '../../components/admin/Navbar';

const Layout = ({ childern }) => {
  return (
    <>
      <Navbar />
      {childern}
    </>
  );
};

export default Layout;
