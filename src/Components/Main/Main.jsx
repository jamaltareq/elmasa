import React from 'react';
import video1 from '../../Assets/homee.mp4';

export default function Main() {
    return (
        <div className="main rtl">
            <div className="video-container">
                <video
                    className="responsive-video"
                    autoPlay
                    loop
                    muted
                >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
