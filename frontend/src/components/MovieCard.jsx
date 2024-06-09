import { useDispatch } from 'react-redux';
import { TMDB_IMG_URL } from '../utils/constant';
import { getId, setOpen } from '../redux/movieSlice';

const MovieCard = ({ movie, movieId }) => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };
  return (
    <div className='w-60' onClick={handleOpen}>
      <img
        className='h-40'
        src={
          TMDB_IMG_URL + movie.backdrop_path ===
          'https://image.tmdb.org/t/p/w500null'
            ? 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
            : TMDB_IMG_URL + movie.backdrop_path
        }
        alt='image'
      />
    </div>
  );
};

export default MovieCard;
