import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { options } from '../utils/constant';
import { getTrailerMovie } from '../redux/movieSlice';

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        const trailer = res?.data?.results?.filter(
          (item) => item.type === 'Trailer'
        );
        dispatch(
          getTrailerMovie(
            trailer.length > 0 ? trailer[0] : res.data?.results[0]
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (movieId) {
      fetchMovieById();
    }
  }, [movieId, dispatch]);
};

export default useMovieById;
