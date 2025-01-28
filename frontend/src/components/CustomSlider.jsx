import React from "react"
import "./CustomSlider.css"

export function CustomSlider({ value, onChange, min = 0, max = 100, step = 1 }) {
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="custom-slider"
        style={{
          "--percentage": `${percentage}%`,
        }}
      />
    </div>
  )
}

