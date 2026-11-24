import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const backgroundAudioUrl =
  'https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/public/audio/backSound.wav'

function BackgroundAudioControl() {
  const audioRef = useRef(null)
  const isMutedRef = useRef(false)
  const isManuallyMutedRef = useRef(false)
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

    const resumeWhenVideoStops = (event) => {
      if (!(event.target instanceof HTMLVideoElement)) {
        return
      }

      const anotherVideoIsPlaying = [
        ...document.querySelectorAll('video'),
      ].some(
        (video) =>
          video !== event.target && !video.paused && !video.ended,
      )
      if (anotherVideoIsPlaying || isManuallyMutedRef.current) {
        return
      }

      isMutedRef.current = false
      audio.muted = false
      setIsMuted(false)

      if (audio.paused) {
        audio.play().catch(() => {
          autoplayBlockedRef.current = true
        })
      }
    }

    const resumeAfterInteraction = (event) => {
      if (
        !autoplayBlockedRef.current ||
        isManuallyMutedRef.current ||
        (event.target instanceof Element &&
          event.target.closest('.aurea-audio-toggle'))
      ) {
        return
      }

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
        if (!isMutedRef.current) {
          autoplayBlockedRef.current = true
        }
      })
    }

    document.addEventListener('play', muteWhenVideoStarts, true)
    document.addEventListener('pause', resumeWhenVideoStops, true)
    document.addEventListener('ended', resumeWhenVideoStops, true)
    document.addEventListener('pointerdown', resumeAfterInteraction, true)
    document.addEventListener('keydown', resumeAfterInteraction, true)

    audio.play().catch(() => {
      if (!isMutedRef.current) {
        autoplayBlockedRef.current = true
      }
    })

    return () => {
      document.removeEventListener('play', muteWhenVideoStarts, true)
      document.removeEventListener('pause', resumeWhenVideoStops, true)
      document.removeEventListener('ended', resumeWhenVideoStops, true)
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

    if (!isMutedRef.current && audio.paused) {
      audio.muted = false
      audio.play().catch(() => {
        autoplayBlockedRef.current = true
      })
      return
    }

    const nextMuted = !isMutedRef.current
    isManuallyMutedRef.current = nextMuted
    isMutedRef.current = nextMuted
    audio.muted = nextMuted
    setIsMuted(nextMuted)

    if (!nextMuted) {
      audio.play().catch(() => {
        autoplayBlockedRef.current = true
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
