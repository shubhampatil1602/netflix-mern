import React from 'react';

const VideoTitle = ({ overview, title }) => {
  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[18%] p-16'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='mt-4 w-2/5'>{overview.substring(0, 200)}</p>
      <div className='mt-6'>
        <button className='px-5 py-2 font-semibold hover:opacity-85 bg-white text-black rounded-sm mr-2'>
          Play
        </button>
        <button className='px-5 py-2 font-semibold hover:opacity-85 bg-red-600 rounded-sm'>
          Watch more
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
