import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react'

export function Statistics() {
  const predictionValue = 65 // Example prediction value
  const circumference = 2 * Math.PI * 120 // 120 is the radius

  // Calculate the stroke-dasharray value based on the prediction
  const strokeDasharray = (predictionValue / 100) * circumference

  // Determine color based on prediction value
  const getColor = (value) => {
    if (value < 30) return '#EF4444' // Red
    if (value < 70) return '#FBBF24' // Yellow
    return '#10B981' // Green
  }

  // Get icon based on prediction value
  const getIcon = (value) => {
    if (value < 30) return <AlertCircle className="w-8 h-8 text-red-500" />
    if (value < 70) return <AlertTriangle className="w-8 h-8 text-yellow-500" />
    return <CheckCircle className="w-8 h-8 text-green-500" />
  }

  const color = getColor(predictionValue)

  return (
    <motion.div 
      className="bg-[#1E1E1E] rounded-lg p-6 shadow-xl h-[400px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-bold text-white mb-4">Popularity Prediction</h2>
      <div className="flex flex-col items-center justify-center h-[calc(100%-2rem)]">
        <div className="relative w-64 h-64">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="#374151"
              strokeWidth="8"
            />
            {/* Animated progress circle */}
            <motion.circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeDasharray={`${circumference} ${circumference}`}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: circumference - strokeDasharray }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {getIcon(predictionValue)}
              <motion.span 
                className="text-4xl font-bold mt-2"
                style={{ color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {predictionValue}%
              </motion.span>
              <motion.span 
                className="text-gray-400 text-sm mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Predicted Success Rate
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Legend */}
        <motion.div 
          className="flex gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-sm text-gray-400">&lt;30%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-sm text-gray-400">30-70%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400">&gt;70%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

