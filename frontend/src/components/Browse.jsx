import { useSelector } from 'react-redux';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);

  /* Custom hooks. */
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Header />
      <div className=''>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
