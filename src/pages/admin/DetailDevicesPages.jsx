import { useParams } from 'react-router-dom';

const DetailDevicesPages = () => {
  const { id } = useParams();

  return <div>Device ke {id}</div>;
};

export default DetailDevicesPages;
