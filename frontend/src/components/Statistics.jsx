import React from "react"
import { AlertTriangle } from "lucide-react"
import "./Statistics.css"

export function Statistics() {
  const predictionValue = 60  

  const getColor = (value) => {
    if (value <= 30) return "#F87171" // Red
    if (value <= 50) return "#FBBF24" // Yellow
    return "#10B981" // Teal
  }

  const color = getColor(predictionValue)

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
                "--progress": predictionValue,
                "--progress-color": color,
              }}
            />
          </svg>
          <div className="progress-content">
            <AlertTriangle className="status-icon" size={24} style={{ color }} />
            <span className="prediction-value" style={{ color }}>
              {predictionValue}%
            </span>
            <span className="prediction-label">Predicted Success Rate</span>
          </div>
        </div>
        <div className="indicator-dots">
          <span className="dot low" />
          <span className="dot medium" />
          <span className="dot high" />
        </div>
      </div>
    </div>
  )
}

