import React, { useState, useEffect } from "react"
import { Upload, Wand2 } from "lucide-react"
import { MusicIllustration } from "../components/MusicIllustration"
import "./Home.css"

const genres = [
  "Acoustic",
  "Brazil",
  "British",
  "Cantopop",
  "Chill",
  "Classical",
  "Club",
  "Country",
  "Dance",
  "EDM",
  "Folk",
  "French",
  "HipHop",
  "Indie Rock",
  "Metal",
  "RnB",
]

export default function Home() {
  const [file, setFile] = useState(null)
  const [genre, setGenre] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    const MAX_FILE_SIZE = 3 * 1024 * 1024 // 3MB in bytes

    if (selectedFile && selectedFile.size > MAX_FILE_SIZE) {
      alert("File size exceeds 3MB limit")
      e.target.value = "" // Reset input
      setFile(null)
      return
    }

    setFile(selectedFile)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file || !genre) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    console.log("Submitted:", { file, genre })
  }

  return (
    <div className="home-container">
      <div className={`form-section ${isVisible ? "fade-in-left" : ""}`}>
        <div className="form-content">
          <h1 className="slide-in-top">Music Popularity Predictor</h1>
          <p className="subtitle slide-in-top delay-1">Discover your music's potential reach</p>

          <form onSubmit={handleSubmit} className="fade-in delay-2">
            <div className="form-group">
              <label>Upload Your Music</label>
              <div className="upload-area">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  id="music-file"
                  className="file-input"
                />
                <label htmlFor="music-file" className="file-label">
                  <Upload size={20} />
                  <span>{file ? file.name : "  Choose a file"}</span>
                </label>
              </div>
              <p className="file-hint">Maximum file size: 3MB</p>
            </div>

            <div className="form-group">
              <label>Select Genre</label>
              <select value={genre} onChange={(e) => setGenre(e.target.value)} className="genre-select">
                <option value="">Select a genre</option>
                {genres.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="predict-button" disabled={!file || !genre || isLoading}>
              {isLoading ? (
                <div className="loading-spinner" />
              ) : (
                <>
                  <Wand2 size={20} />
                  <span>Predict Popularity</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <div className={`illustration-section ${isVisible ? "fade-in-right" : ""}`}>
        <MusicIllustration />
      </div>
    </div>
  )
}

