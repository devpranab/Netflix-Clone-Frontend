import React from 'react';
import watchDevices from '../../media/images/device-pile-in.png';
import video from '../../media/video/video.mp4';

const Watch = () => {
  return (
    <div className="text-white w-full sm:flex-none md:flex items-center justify-around px-20 py-10 border-y-8 border-gray-700">
      <div className="watch-text">
        <h1 className="md:text-5xl font-bold pb-4">Watch everywhere.</h1>
        <p className="md:text-3xl">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className="watch-devices object-cover relative">
        <img src={watchDevices} alt="watchDevice" />
        <video className="absolute top-10 left-[80px] w-[279px] h-[150px]" src={video} controls autoplay></video>
      </div>
    </div>
  );
};

export default Watch;
