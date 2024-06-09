import { useState } from 'react';
import axios from 'axios';
import { options, SEARCH_MOVIE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import MovieList from './MovieList';
import { setLoading } from '../redux/userSlice';

const SearchMovie = () => {
  const [searchMovie, setsearchMovie] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector(
    (store) => store.searchMovie
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        SEARCH_MOVIE_URL +
          searchMovie +
          '&include_adult=false&language=en-US&page=1',
        options
      );
      const movies = res?.data?.results;
      console.log(movies);
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setsearchMovie('');
  };
  return (
    <>
      <div className='flex items-center flex-col justify-start pt-[10%] w-full bg-slate-800'>
        <form onSubmit={submitHandler} className='w-[50%]'>
          <div className='flex justify-between shadow-md rounded-lg w-full'>
            <input
              className='w-full rounded-l-lg outline-none py-2 px-3'
              placeholder='Search Movies'
              type='text'
              value={searchMovie}
              onChange={(e) => setsearchMovie(e.target.value)}
            />
            <button className='py-2 px-3 bg-red-500 hover:opacity-90 text-white rounded-r-lg'>
              {isLoading ? 'Loading...' : 'Search'}
            </button>
          </div>
        </form>
        <h1 className='text-white font-bold text-2xl mt-6'>
          Showing Results: <span className='text-red-500'>{movieName}</span>
        </h1>
      </div>
      <div className='bg-gray-800 h-screen'>
        {searchedMovie && <MovieList movies={searchedMovie} />}
      </div>
    </>
  );
};

export default SearchMovie;
