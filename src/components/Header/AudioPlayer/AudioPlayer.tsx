import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import song from './my_song.mp3';

const AudioPlayer: React.FC = () => {
    return (
        <div className="d-flex align-items-center">
            <ReactAudioPlayer src={song} style={{height: "30px", marginLeft: 20}} controls/>
        </div>
    )
}

export default AudioPlayer;