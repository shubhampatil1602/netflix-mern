import React from 'react';

const VideoTitle = () => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold'>Lorem, ipsum.</h1>
      <p className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias
        numquam culpa!
      </p>
      <div className='mt-8'>
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
