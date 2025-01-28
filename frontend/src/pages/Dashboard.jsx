import { motion } from "framer-motion"
import { MusicPlayer } from "../components/MusicPlayer"
import { PredictionGraph } from "../components/PredictionGraph"
import { Features } from "../components/Features"
import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-2">Music Analytics Dashboard</h1>
        <p className="text-gray-400">Track your music's performance and predictions</p>
      </motion.div>

      <div className="grid gap-8">
        <div className="flex justify-center">
          <MusicPlayer />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PredictionGraph />
          </div>
          <div>
            <Features />
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors">
          ← Back to Prediction
        </Link>
      </div>
    </div>
  )
}

