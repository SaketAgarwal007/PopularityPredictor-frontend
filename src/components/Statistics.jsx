import React from "react"
import { AlertTriangle } from "lucide-react"
import "./Statistics.css"

export function Statistics({ popularity }) {
  // Scale up and round the popularity value
  const scaledPopularity = Math.min(Math.round((popularity || 0) * 2), 100) // Scale up, cap at 100%

  // Get color based on popularity
  const getColor = (value) => {
    if (value <= 30) return "#F87171" // Red
    if (value <= 50) return "#FBBF24" // Yellow
    return "#10B981" // Teal
  }
  const color = getColor(scaledPopularity)

  return (
    <div className="statistics-container">
      <h2>Popularity Prediction</h2>
      <div className="prediction-content">
        <div className="circular-progress-container">
          <svg className="circular-progress" viewBox="0 0 120 120">
            <circle className="progress-background" cx="60" cy="60" r="54" strokeWidth="12" />
            <circle
              className="progress-circle"
              cx="60"
              cy="60"
              r="54"
              strokeWidth="12"
              style={{
                "--progress": scaledPopularity,
                "--progress-color": color,
              }}
            />
          </svg>
          <div className="progress-content">
            <AlertTriangle className="status-icon" size={24} style={{ color }} />
            <span className="prediction-value" style={{ color }}>
              {scaledPopularity}%
            </span>
            <span className="prediction-label">Predicted Success Rate</span>
          </div>
        </div>
      </div>
    </div>
  )
}
