import React from "react"
import { Features } from "../components/Features"
import { Statistics } from "../components/Statistics"
import { MusicPlayer } from "../components/MusicPlayer"
import "./Dashboard.css"

export default function Dashboard() {
  // This would normally come from your app's state
  const audioUrl = "/placeholder-song.mp3"

  return (
    <div className="dashboard-container">
      <h1>Your Music Analytics Dashboard</h1>
      <MusicPlayer audioUrl={audioUrl} />
      <div className="dashboard-grid">
        <Features />
        <Statistics />
      </div>
    </div>
  )
}

