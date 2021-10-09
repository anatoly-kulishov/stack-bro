import React from 'react';
import './Video.scss';

interface IVideoProps {
    posterImg: string;
    videoSrc: Array<ISourcesVideo>;
}
export interface ISourcesVideo {
    id: number;
    videoUrl: string;
    formatVideo: string;
}

const Video: React.FC<IVideoProps> = (props) => {

    const {posterImg, videoSrc} = props;

    return (
        <div className="video-container">
            <video className="video" poster={posterImg} controls>
                {videoSrc.map(source => {
                    return (
                        <source key={source.id} src={source.videoUrl} type={`video/${source.formatVideo}`} />
                    )
                })}

            </video>
            {/*<iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/ucZl6vQ_8Uo"*/}
            {/*        title="YouTube video player" frameBorder="0"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*        allowFullScreen></iframe>*/}
        </div>
    )
}

export default Video;
