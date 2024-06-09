import { IoIosArrowDropdown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT } from '../utils/constant';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success('Logged out successfully.');
      }
      dispatch(setUser(null));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };
  return (
    <div className='absolute z-10 w-full p-4 pt-0 flex justify-center bg-gradient-to-b from-black'>
      <div className='sm:w-5/6 pt-10 sm:p-6 flex justify-between'>
        <img
          className='w-44 h-10'
          src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460'
          alt='logo'
        />

        {user && (
          <div className='flex gap-2'>
            <div className='flex justify-center items-center text-white'>
              <h1 className='rounded-md p-2 font-medium'>
                {user.user.fullName}
              </h1>
              <IoIosArrowDropdown size={25} />
            </div>

            <button
              onClick={logoutHandler}
              className='bg-red-600 text-white px-4 py-2 rounded-md'
            >
              Logout
            </button>
            <button
              onClick={toggleHandler}
              className='bg-red-600 text-white px-4 py-2 rounded-md'
            >
              {toggle ? 'Home' : 'Search movie'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
