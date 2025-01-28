import React from "react"
import "./MusicIllustration.css"

export function MusicIllustration() {
  return (
    <div className="music-illustration">
      <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main cassette body */}
        <rect
          className="cassette-body"
          x="20"
          y="20"
          width="360"
          height="210"
          rx="20"
          fill="#1E1E1E"
          stroke="#7C3AED"
          strokeWidth="2"
        />

        {/* Label area */}
        <rect
          className="label-area"
          x="40"
          y="40"
          width="320"
          height="80"
          rx="4"
          fill="#7C3AED"
          fillOpacity="0.1"
          stroke="#7C3AED"
          strokeWidth="1"
        />

        {/* Text "A90" */}
        <text
          x="50%"
          y="90"
          className="cassette-text"
          fill="#7C3AED"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="'Press Start 2P', cursive"
        >
          MUSIC ANALYTICS
        </text>

        {/* Tape window */}
        <rect
          className="tape-window"
          x="40"
          y="140"
          width="320"
          height="60"
          rx="4"
          fill="#0B1121"
          stroke="#7C3AED"
          strokeWidth="1"
        />

        {/* Left spool */}
        <g className="spool left-spool">
          <circle cx="120" cy="170" r="25" fill="#7C3AED" />
          <circle cx="120" cy="170" r="10" fill="#1E1E1E" />
          <path className="spool-detail" d="M120 145L125 170L120 195" stroke="#1E1E1E" strokeWidth="1" />
        </g>

        {/* Right spool */}
        <g className="spool right-spool">
          <circle cx="280" cy="170" r="25" fill="#7C3AED" />
          <circle cx="280" cy="170" r="10" fill="#1E1E1E" />
          <path className="spool-detail" d="M280 145L285 170L280 195" stroke="#1E1E1E" strokeWidth="1" />
        </g>

        {/* Tape path */}
        <path
          className="tape-path"
          d="M120 145C120 145 180 145 200 145C220 145 280 145 280 145C280 145 280 195 280 195C280 195 220 195 200 195C180 195 120 195 120 195C120 195 120 145 120 145Z"
          stroke="#7C3AED"
          strokeWidth="2"
          fill="none"
        />

        {/* Small holes */}
        <circle cx="80" cy="170" r="5" fill="#7C3AED" />
        <circle cx="320" cy="170" r="5" fill="#7C3AED" />

        {/* Decorative lines */}
        <line x1="40" y1="130" x2="360" y2="130" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="40" y1="210" x2="360" y2="210" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    </div>
  )
}

