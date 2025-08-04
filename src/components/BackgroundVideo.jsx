import React, { useRef, useState } from 'react';
import './backgroundVideo.css';

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(false);

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setPaused(video.paused);
  };

  return (
    <>
      <video
        ref={videoRef}
        src="/video/fondo.mp4"
        autoPlay
        loop
        playsInline
        muted={muted}
        className="background-video"
      />
      <div className="video-controls">
        <button onClick={togglePlay}>{paused ? '▶️' : '⏸'}</button>
        <button onClick={toggleMute}>{muted ? '🔇' : '🔊'}</button>
      </div>
    </>
  );
}