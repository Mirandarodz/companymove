import { useEffect, useRef } from 'react'

export default function BackgroundVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video && video.paused) {
      video.play().catch(() => {})
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src="/video/fondo.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    />
  )
}