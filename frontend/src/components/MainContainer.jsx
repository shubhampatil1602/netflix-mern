import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movie) {
    return;
  }

  const { overview, id, title } = movie[4];

  return (
    <div className=''>
      <VideoTitle overview={overview} title={title} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
