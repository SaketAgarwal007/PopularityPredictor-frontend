import React from "react";
import "./Features.css";

// Function to determine feature color based on its value
const getFeatureColor = (value) => {
  if (value >= 70) return "#10B981"; // High - Teal
  if (value >= 40) return "#FBBF24"; // Medium - Yellow
  return "#F87171"; // Low - Red
};

export function Features({ trackFeatures }) {
  // Check if trackFeatures is null or undefined and provide a fallback
  if (!trackFeatures || Object.keys(trackFeatures).length === 0) {
    return <p>No features data available.</p>;  // Display message if data is missing
  }

  return (
    <div className="features-container">
      <h2>Track Features</h2>
      <div className="features-list">
        {Object.keys(trackFeatures).map((feature) => {
          const value = trackFeatures[feature]; // Get the feature value
          const valueInPercentage = !isNaN(value) ? value.toFixed(0) : "0"; // Ensure the value is a valid number
          return (
            <div key={feature} className="feature-item">
              <div className="feature-header">
                <span className="feature-name">{feature}</span>
                <span className="feature-value">{valueInPercentage}%</span>
              </div>
              <div className="feature-line-container">
                <div
                  className="feature-line"
                  style={{
                    "--progress": `${value}%`,
                    "--color": getFeatureColor(value),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
