import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Wand2, ChevronDown } from "lucide-react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MusicIllustration from "./components/MusicIllustration"
import MusicalNotes from "./components/MusicalNotes"
import "./App.css"
import "./components/MusicIllustration.css"
import "./components/MusicalNotes.css"

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
  "RnB"
]

export default function App() {
  const [file, setFile] = useState(null)
  const [genre, setGenre] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file || !genre) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    console.log("Submitted:", { file, genre })
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="content-wrapper">
          <div className="form-section">
            <motion.div
              className="form-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center space-y-4 mb-12">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                    Music Popularity Predictor
                </motion.h1>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Discover your music's potential reach
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <label className="text-lg font-medium mb-3 block">Upload Your Music</label>
                  
                  <div className="upload-container">
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                      id="music-file"
                    />
                    <label htmlFor="music-file" className="upload-label">
                      <Upload size={20} />
                      <span>{file ? file.name : "Choose a file"}</span>
                    </label>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <br></br>
                  <label className="text-lg font-medium mb-3 block">Select Genre</label>
                  <div className="select-wrapper">
                    <select
                      className="select-input"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      onFocus={() => setIsDropdownOpen(true)}
                      onBlur={() => setIsDropdownOpen(false)}
                    >
                      
                      <option value="">Select a genre</option>
                      {genres.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="select-arrow" />
                    {isDropdownOpen && <MusicalNotes />}
                  </div>
                </motion.div>

                <motion.button
                  className="predict-btn"
                  type="submit"
                  disabled={!file || !genre || isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="loading-dots" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Wand2 size={20} />
                      <span>Predict Popularity</span>
                    </div>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
          <div className="image-section">
            <MusicIllustration />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

