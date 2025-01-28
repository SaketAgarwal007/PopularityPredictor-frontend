import React from "react"
import { useLocation } from "react-router-dom"  // To access the passed state
import { Features } from "../components/Features"
import { Statistics } from "../components/Statistics"
import { MusicPlayer } from "../components/MusicPlayer"
import "./Dashboard.css"

export default function Dashboard() {
  const location = useLocation()
  const { popularity, acousticness, danceability, energy, instrumentalness, song_url, metadata, audio_features, } = location.state || {}

  return (
    <div className="dashboard-container">
      <h1>Your Music Analytics Dashboard</h1>
      <MusicPlayer audioUrl={song_url} /> {/* Pass the song URL to the MusicPlayer */}
      <div className="dashboard-grid">
        <Features
          acousticness={acousticness}
          danceability={danceability}
          energy={energy}
          instrumentalness={instrumentalness}
        />
        <Statistics
          popularity={popularity}
          metadata={metadata}
          audio_features={audio_features}
        />
      </div>
    </div>
  )
}
