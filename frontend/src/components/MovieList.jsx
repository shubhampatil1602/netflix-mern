import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-8'>
      <h1 className='text-3xl font-semibold py-4 text-white'>{title}</h1>
      <div className='overflow-x-auto cursor-pointer flex no-scrollbar'>
        <div className='flex items-center gap-2'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
