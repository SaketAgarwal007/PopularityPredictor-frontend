import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration))
    return () => {
      audio.removeEventListener("timeupdate", updateProgress)
    }
  }, [])

  const updateProgress = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressChange = (e) => {
    const newTime = e.target.value
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value
    setVolume(newVolume)
    audioRef.current.volume = newVolume
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  return (
    <motion.div
      className="bg-[#1E1E1E] rounded-lg p-6 shadow-xl w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <audio ref={audioRef} src="/path-to-your-audio-file.mp3" />

      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-white font-semibold">Love Me Like You Do</h3>
          <p className="text-gray-400 text-sm">Ellie Goulding</p>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full"
        />
        <div className="flex justify-between text-gray-400 text-xs mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <SkipBack size={24} />
        </button>
        <button
          className="bg-[#7C3AED] text-white rounded-full p-3 hover:bg-[#6D28D9] transition-colors"
          onClick={togglePlay}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <SkipForward size={24} />
        </button>
      </div>

      <div className="flex items-center mt-4">
        <button className="text-gray-400 hover:text-white transition-colors mr-2" onClick={toggleMute}>
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-full"
        />
      </div>
    </motion.div>
  )
}

