import BackgroundVideo from '../components/BackgroundVideo.jsx'

export default function PersistentLayout({ children }) {
  return (
    <>
      <BackgroundVideo />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </>
  )
}