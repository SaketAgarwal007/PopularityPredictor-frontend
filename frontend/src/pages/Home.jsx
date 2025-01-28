import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Wand2, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { MusicIllustration } from "../components/MusicIllustration"

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file || !genre) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="bg-[#1E1E1E] rounded-xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4"
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <label className="block text-sm font-medium mb-2">Upload Your Music</label>
              <div className="border-2 border-dashed border-purple-500 rounded-lg p-4 hover:border-purple-400 transition-colors">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                  id="music-file"
                />
                <label
                  htmlFor="music-file"
                  className="flex items-center justify-center gap-2 cursor-pointer text-gray-400 hover:text-white"
                >
                  <Upload className="w-5 h-5" />
                  <span>{file ? file.name : "Choose a file"}</span>
                </label>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <label className="block text-sm font-medium mb-2">Select Genre</label>
              <div className="relative">
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full bg-[#2E2E2E] border border-gray-700 rounded-lg px-4 py-2.5 appearance-none focus:outline-none focus:border-purple-500"
                >
                  <option value="">Select a genre</option>
                  {genres.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </motion.div>

            <motion.button
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={!file || !genre || isLoading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  <span>Predict Popularity</span>
                </>
              )}
            </motion.button>

            <div className="text-center mt-6">
              <Link to="/dashboard" className="text-purple-400 hover:text-purple-300 transition-colors">
                View Analytics Dashboard
              </Link>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MusicIllustration />
        </motion.div>
      </div>
    </div>
  )
}

