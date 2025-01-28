import React, { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"
import "./MusicPlayer.css"

export function MusicPlayer({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const progressRef = useRef(null)

  const togglePlay = () => {
    console.log(audioUrl);  // Debugging toggle play
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleAudioError = () => {
    console.error("Error loading audio file");
  }

  const handleProgressClick = (e) => {
    const bounds = progressRef.current.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const width = bounds.width
    const percentage = x / width
    const newTime = percentage * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="music-player">
      {/* Audio error handling */}
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleLoadedMetadata} 
        onError={handleAudioError}  // Handle loading errors
      />
      <button
        className={`play-button ${isPlaying ? "playing" : ""}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <div className="player-controls">
        <span className="time current">{formatTime(currentTime)}</span>
        <div className="progress-bar" ref={progressRef} onClick={handleProgressClick}>
          <div className="progress-fill" style={{ width: `${(currentTime / duration) * 100}%` }} />
        </div>
        <span className="time total">{formatTime(duration)}</span>
      </div>
    </div>
  )
}
