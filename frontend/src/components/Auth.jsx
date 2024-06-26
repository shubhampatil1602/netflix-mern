import { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const handleAuth = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      try {
        const res = await axios.post(
          `${API_END_POINT}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data));
        navigate('/browse');
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      try {
        const res = await axios.post(
          `${API_END_POINT}/register`,
          {
            fullName,
            email,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className=''>
      <Header />
      <div className='h-full w-full absolute hidden sm:block'>
        <img
          className='object-contain'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg'
        />
      </div>
      <div className='h-[115.233%] w-full absolute bg-black sm:opacity-40'></div>

      <form
        onSubmit={getInputData}
        className='bg-black opacity-90 text-white absolute z-20 sm:p-16 sm:pt-12 p-10 rounded-lg w-full sm:w-[441px] flex flex-col gap-10 mx-auto left-0 right-0 my-32'
      >
        <h1 className='text-3xl font-bold'>{isLogin ? 'Login' : 'Register'}</h1>
        <div className='flex flex-col gap-4'>
          {!isLogin && (
            <input
              className='p-4 rounded bg-transparent outline-none border border-gray-400'
              type='text'
              placeholder='Full name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
          <input
            className='p-4 rounded bg-transparent outline-none border border-gray-400'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='p-4 rounded bg-transparent outline-none border border-gray-400'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='p-2 rounded bg-red-600 font-bold text-lg'>
            {`${isLoading ? 'Loading...' : isLogin ? 'Login' : 'Register'}`}
          </button>
        </div>
        <p className='font-xs text-gray-300 font-extralight'>
          {isLogin ? 'New to Netflix?' : 'Already have an account?'}{' '}
          <span className='font-semibold cursor-pointer' onClick={handleAuth}>
            {isLogin ? 'Register now.' : 'Login now.'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
