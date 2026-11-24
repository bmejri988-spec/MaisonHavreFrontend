import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const backgroundAudioUrl =
  'https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/public/audio/backSound.wav'

function BackgroundAudioControl() {
  const audioRef = useRef(null)
  const isMutedRef = useRef(false)
  const hasUserInteractedRef = useRef(false)
  const autoplayBlockedRef = useRef(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) {
      return undefined
    }

    audio.volume = 0.3

    const muteWhenVideoStarts = (event) => {
      if (!(event.target instanceof HTMLVideoElement)) {
        return
      }

      isMutedRef.current = true
      audio.muted = true
      setIsMuted(true)
    }

    const resumeAfterInteraction = (event) => {
      if (
        hasUserInteractedRef.current ||
        !autoplayBlockedRef.current ||
        (event.target instanceof Element &&
          event.target.closest('.aurea-audio-toggle'))
      ) {
        return
      }

      hasUserInteractedRef.current = true
      autoplayBlockedRef.current = false
      const videoIsPlaying = [...document.querySelectorAll('video')].some(
        (video) => !video.paused && !video.ended,
      )
      if (videoIsPlaying) {
        return
      }

      isMutedRef.current = false
      audio.muted = false
      setIsMuted(false)
      audio.play().catch(() => {
        isMutedRef.current = true
        audio.muted = true
        setIsMuted(true)
      })
    }

    document.addEventListener('play', muteWhenVideoStarts, true)
    document.addEventListener('pointerdown', resumeAfterInteraction, true)
    document.addEventListener('keydown', resumeAfterInteraction, true)

    audio.play().catch(() => {
      if (!isMutedRef.current && !hasUserInteractedRef.current) {
        autoplayBlockedRef.current = true
        isMutedRef.current = true
        audio.muted = true
        setIsMuted(true)
      }
    })

    return () => {
      document.removeEventListener('play', muteWhenVideoStarts, true)
      document.removeEventListener('pointerdown', resumeAfterInteraction, true)
      document.removeEventListener('keydown', resumeAfterInteraction, true)
      audio.pause()
    }
  }, [])

  const toggleMuted = () => {
    const audio = audioRef.current
    if (!audio) {
      return
    }

    hasUserInteractedRef.current = true
    const nextMuted = !isMutedRef.current
    isMutedRef.current = nextMuted
    audio.muted = nextMuted
    setIsMuted(nextMuted)

    if (!nextMuted) {
      audio.play().catch(() => {
        isMutedRef.current = true
        audio.muted = true
        setIsMuted(true)
      })
    }
  }

  return (
    <>
      <audio ref={audioRef} src={backgroundAudioUrl} loop preload="auto" />
      <button
        type="button"
        className="aurea-audio-toggle"
        onClick={toggleMuted}
        aria-label={isMuted ? 'Activer la musique d’ambiance' : 'Couper la musique d’ambiance'}
        aria-pressed={!isMuted}
      >
        {isMuted ? <VolumeX size={19} /> : <Volume2 size={19} />}
        <span>{isMuted ? 'Activer le son' : 'Couper le son'}</span>
      </button>
    </>
  )
}

export default BackgroundAudioControl
