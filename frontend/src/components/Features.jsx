import React from "react"
import "./Features.css"

const features = [
  { name: "Danceability", value: 85 },
  { name: "Energy", value: 92 },
  { name: "Valence", value: 78 },
  { name: "Acousticness", value: 45 },
  { name: "Instrumentalness", value: 30 },
]

const getFeatureColor = (value) => {
  if (value >= 70) return "#10B981" // High - Teal
  if (value >= 40) return "#FBBF24" // Medium - Yellow
  return "#F87171" // Low - Red
}

export function Features() {
  return (
    <div className="features-container">
      <h2>Track Features</h2>
      <div className="features-list">
        {features.map((feature) => (
          <div key={feature.name} className="feature-item">
            <div className="feature-header">
              <span className="feature-name">{feature.name}</span>
              <span className="feature-value">{feature.value}%</span>
            </div>
            <div className="feature-line-container">
              <div
                className="feature-line"
                style={{
                  "--progress": `${feature.value}%`,
                  "--color": getFeatureColor(feature.value),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

