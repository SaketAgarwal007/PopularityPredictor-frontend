import { motion } from "framer-motion"

const features = [
  { name: "Danceability", value: 85 },
  { name: "Energy", value: 92 },
  { name: "Valence", value: 78 },
  { name: "Acousticness", value: 45 },
  { name: "Instrumentalness", value: 30 },
]

export function Features() {
  return (
    <motion.div
      className="bg-[#1E1E1E] rounded-lg p-6 shadow-xl h-[400px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-bold text-white mb-6">Track Features</h2>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-300">{feature.name}</span>
              <span className="text-sm text-gray-400">{feature.value}%</span>
            </div>
            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-[#7C3AED]"
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

