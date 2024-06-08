import React from 'react';

const VideoBackground = () => {
  return (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src='https://www.youtube.com/embed/k7hArQL_m1k?si=FpYa9N8sM7G1IfyT&autoplay=1&mute=1&loop=1'
        title='YouTube video player'
        frameborder='0'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
