import React, { FC } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import song from './my_song.mp3';

export const AudioPlayer: FC = () => {
  return (
    <div className="d-flex align-items-center">
      <ReactAudioPlayer
        src={song}
        style={{ height: '30px', marginLeft: '20px' }}
        volume={1.0}
        controls
        autoPlay={true}
      />
    </div>
  );
};
