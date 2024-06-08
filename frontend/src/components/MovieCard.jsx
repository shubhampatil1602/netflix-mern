import { TMDB_IMG_URL } from '../utils/constant';

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className='w-60'>
      <img
        className='h-40'
        src={`${TMDB_IMG_URL}${movie.backdrop_path}`}
        alt='image'
      />
    </div>
  );
};

export default MovieCard;
