import React, { FC } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import styles from './AudioPlayer.module.scss';
import song from './my_song.mp3';

export const AudioPlayer: FC = () => {
  return (
    <div className="d-flex align-items-center">
      <ReactAudioPlayer className={styles.AudioPlayer} autoPlay={true} volume={1.0} src={song} loop={true} controls />
    </div>
  );
};
