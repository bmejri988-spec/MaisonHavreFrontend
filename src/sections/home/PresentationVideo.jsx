import videoSource from '../../../../vid.mp4'

function PresentationVideo() {
  return (
    <section id="video" className="aurea-video-section">
      <div className="aurea-video-heading">
        <div>
          <span className="aurea-eyebrow">L’expérience Maison Havre</span>
          <h2>Découvrez votre futur refuge.</h2>
        </div>
        <p>
          Une architecture pensée pour le paysage tunisien, entre nature,
          confort et liberté.
        </p>
      </div>

      <div className="aurea-video-frame">
        <video controls playsInline preload="metadata" src={videoSource}>
          Votre navigateur ne prend pas en charge la lecture vidéo.
        </video>
      </div>
    </section>
  )
}

export default PresentationVideo