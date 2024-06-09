import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector((store) => store.movie?.trailerMovie);

  useMovieById(movieId);
  if (!trailerMovie) {
    return null; // Render nothing if trailerMovie is not yet available
  }
  return (
    <div className={`${bool ? 'w-[400px]' : 'w-screen'}`}>
      <iframe
        className={`${bool ? 'h-[300px] w-full' : 'w-screen aspect-video'}`}
        src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&loop=1&playlist=${trailerMovie.key}`}
        title='YouTube video player'
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
