import { useSelector } from 'react-redux';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
