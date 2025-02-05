import React from "react"
import { useLocation } from "react-router-dom"  // To access the passed state
import { Features } from "../components/Features"
import { Statistics } from "../components/Statistics"
import { MusicPlayer } from "../components/MusicPlayer"
import "./Dashboard.css"

export default function Dashboard() {
  // Normalize feature values to reduce gaps
const normalizeFeatures = (value, scale = 1) => {
  if (value === undefined || value === null) return 0;
  return Math.sqrt(value * scale) * 100; // Square root for gap reduction
};

const normalizeLoudness = (loudness) => {
  const minLoudness = -60; // Assume -60 dB as the minimum
  const maxLoudness = 0;  // Assume 0 dB as the maximum
  return ((loudness - minLoudness) / (maxLoudness - minLoudness)) * 100;
};

const normalizeTempo = (tempo) => {
  const maxTempo = 200; // Assume a max tempo of 200 BPM
  return (Math.log(tempo) / Math.log(maxTempo)) * 100;
};

// Calculate the percentages for the features


  const location = useLocation();

  // Log location.state to check if it is being passed correctly
  console.log("Location State:", location.state);

  const {
    predicted_popularity,
    song_url,
    metadata = {},
    audio_features = {}
  } = location.state || {};

  // Check if metadata and audio_features are defined
  console.log("Metadata:", metadata);
  console.log("Audio Features:", audio_features);

  // Destructure the properties from metadata and audio_features if they exist
  const { track_name, artist, album_name } = metadata || {};
  const {
    acousticness,
    danceability,
    energy,
    liveness,
    tempo,
    speechiness
  } = audio_features || {};

  // Log the extracted data to verify correct access
  console.log({
    track_name,
    artist,
    album_name,
    acousticness,
    danceability,
    energy,
    liveness
  });

  // Calculate the percentages for the features
  const trackFeatures = {
    acousticness: normalizeFeatures(acousticness),
    danceability: normalizeFeatures(danceability),
    energy: normalizeFeatures(energy),
    liveness: normalizeFeatures(liveness),
    tempo: normalizeTempo(tempo),
    speechiness: normalizeFeatures(speechiness)
  };

  return (
    <div className="dashboard-container">
      <h1>Your Music Analytics Dashboard</h1>
      <MusicPlayer audioUrl={song_url} /> {/* Pass the song URL to the MusicPlayer */}
      <div className="dashboard-grid">
        <Features trackFeatures={trackFeatures} /> {/* Pass the track features */}
        <Statistics
          popularity={predicted_popularity}
          metadata={{ track_name, artist, album_name }} // Pass metadata to Statistics
          audio_features={audio_features} // Pass audio features to Statistics
        />
      </div>
    </div>
  );
}
