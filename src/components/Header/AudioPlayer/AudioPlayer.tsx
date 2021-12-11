import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import song from './my_song.mp3';

const AudioPlayer: React.FC = () => {
    return (
        <div className="d-flex align-items-center" style={{marginLeft: 20}}>
            <ReactAudioPlayer src={song} style={{height: "30px"}} controls/>
        </div>
    )
}

export default AudioPlayer;
